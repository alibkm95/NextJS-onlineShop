import { NextRequest } from "next/server";
import connectToDB from "@/configs/DB";
import UserModel from "@/models/user.model";
import { z } from "zod";
import { resetValidation } from "@/lib/requestValidation";
import { generateAccessToken, hashData, verifyHashedData } from "@/lib/auth";
import { cookies } from "next/headers";
import crypto from "crypto";
import { sendEmail } from "@/lib/sendEmail";
import {
  otpResetEmailTemplate,
  resetEmailTemplate,
} from "@/components/templates/emailHtmlTemplates";

export async function POST(req: NextRequest) {
  connectToDB();
  try {
    const { email } = await req.json();
    if (!email) {
      return Response.json(
        {
          success: false,
          msg: "Validation error!",
        },
        { status: 400 }
      );
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return Response.json(
        {
          success: false,
          msg: "Account not found!",
        },
        { status: 404 }
      );
    }
    const buffer = crypto.randomBytes(3);
    const otp = (buffer.readUIntBE(0, 3) % 1000000).toString().padStart(6, "0");
    const resetPasswordCode = await hashData(otp);
    user.resetPasswordCode = resetPasswordCode;
    user.resetPasswordCodeExpirationDate = new Date(
      Date.now() + 10 * 60 * 1000
    );
    await user.save();
    await sendEmail(
      user.email,
      "Reset password verification code",
      otpResetEmailTemplate(otp, user.fullName)
    );
    return Response.json(
      {
        success: true,
        msg: "Reset password verification code has been sent to your email.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Unknown error:", error);
    return Response.json(
      { success: false, msg: "Unknown error" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  connectToDB();
  try {
    const { email, otpCode, password } = resetValidation.parse(
      await req.json()
    );
    const user = await UserModel.findOne({ email });
    if (!user) {
      return Response.json(
        {
          success: false,
          msg: "User not found!",
        },
        {
          status: 404,
        }
      );
    }
    const isOTPValid = await verifyHashedData(otpCode, user.resetPasswordCode);
    if (!isOTPValid) {
      return Response.json(
        {
          success: false,
          msg: "Invalid OTP-code!",
        },
        {
          status: 401,
        }
      );
    }
    const isOTPExpired =
      new Date(Date.now()) > user.resetPasswordCodeExpirationDate;
    if (isOTPExpired) {
      return Response.json(
        {
          success: false,
          msg: "OTP-code is expired!",
        },
        {
          status: 406,
        }
      );
    }
    if (!user.isVerified) {
      user.isVerified = true;
      user.verifiedIn = Date.now();
      await user.save();
    }
    const accessToken = generateAccessToken({ email: user.email });
    user.password = await hashData(password);
    user.resetPasswordCode = null;
    await user.save();
    await sendEmail(
      email,
      "Reset password success",
      resetEmailTemplate(user.fullName)
    );
    cookies().set({
      name: "accessToken",
      value: accessToken,
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      path: "/",
    });
    return Response.json(
      { success: true, msg: "Reset password completed successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("Validation error:", error.issues);
      return Response.json(
        { success: false, msg: "Validation error!" },
        { status: 400 }
      );
    } else {
      console.log("Unknown error:", error);
      return Response.json(
        { success: false, msg: "Unknown error!" },
        { status: 500 }
      );
    }
  }
}
