import { NextRequest } from "next/server";
import connectToDB from "@/configs/DB";
import UserModel from "@/models/user.model";
import { z } from "zod";
import { registerValidation } from "@/lib/requestValidation";
import { generateAccessToken, hashData, verifyHashedData } from "@/lib/auth";
import { cookies } from "next/headers";
import crypto from "crypto";
import { sendEmail } from "@/lib/sendEmail";
import {
  otpEmailTemplate,
  wellcomeEmailTemplate,
} from "@/components/templates/emailHtmlTemplates";

export async function POST(req: NextRequest) {
  connectToDB();
  try {
    const { fullName, email, password } = registerValidation.parse(
      await req.json()
    );
    const isAlreadyExists = await UserModel.findOne({ email });
    if (isAlreadyExists) {
      return Response.json(
        {
          success: false,
          msg: "User is already registered!",
        },
        { status: 409 }
      );
    }
    const hashedPassword = await hashData(password);
    const isFirstUser: boolean = (await UserModel.countDocuments()) === 0;
    const buffer = crypto.randomBytes(3);
    const otp = (buffer.readUIntBE(0, 3) % 1000000).toString().padStart(6, "0");
    const verificationCode = await hashData(otp);
    await UserModel.create({
      fullName,
      email,
      password: hashedPassword,
      role: isFirstUser ? "ROOTADMIN" : "USER",
      verificationCode,
      verificationCodeExpirationDate: new Date(Date.now() + 10 * 60 * 1000),
    });
    await sendEmail(
      email,
      "Verification code",
      otpEmailTemplate(otp, fullName)
    );
    return Response.json(
      {
        success: true,
        msg: "User registered successfully.",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("Validation error:", error.issues);
      return Response.json(
        { success: false, msg: "Validation error" },
        { status: 400 }
      );
    } else {
      console.log("Unknown error:", error);
      return Response.json(
        { success: false, msg: "Unknown error" },
        { status: 500 }
      );
    }
  }
}

export async function PATCH(req: NextRequest) {
  connectToDB();
  try {
    const { email, otp } = await req.json();
    if (!email || !otp) {
      return Response.json(
        {
          success: false,
          msg: "Credentials are not valid!",
        },
        {
          status: 400,
        }
      );
    }
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
    if (user.isVerified) {
      return Response.json(
        {
          success: false,
          msg: "User already verified!",
        },
        {
          status: 400,
        }
      );
    }
    const isOTPValid = await verifyHashedData(otp, user.verificationCode);
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
      new Date(Date.now()) > user.verificationCodeExpirationDate;
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
    const accessToken = generateAccessToken({ email: user.email });
    user.isVerified = true;
    user.verifiedIn = Date.now();
    user.verificationCode = null;
    await user.save();
    await sendEmail(
      email,
      "Verification success",
      wellcomeEmailTemplate(user.fullName)
    );
    cookies().set({
      name: "accessToken",
      value: accessToken,
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      path: "/",
    });
    return Response.json(
      { success: true, msg: "Verification compeleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.log("Unknown error:", error);
    return Response.json(
      { success: false, msg: "Unknown error" },
      { status: 500 }
    );
  }
}
