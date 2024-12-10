import { NextRequest } from "next/server";
import connectToDB from "@/configs/DB";
import UserModel from "@/models/user.model";
import { generateAccessToken, hashData, verifyHashedData } from "@/lib/auth";
import { cookies } from "next/headers";
import crypto from "crypto";
import { sendEmail } from "@/lib/sendEmail";
import { otpEmailTemplate } from "@/components/templates/emailHtmlTemplates";

export async function POST(req: NextRequest) {
  connectToDB();
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
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
          msg: "There is no such a user with provided credentials!",
        },
        { status: 404 }
      );
    }
    const isPasswordValid = await verifyHashedData(password, user.password);
    if (!isPasswordValid) {
      return Response.json(
        {
          success: false,
          msg: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }
    if (!user.isVerified) {
      const buffer = crypto.randomBytes(3);
      const otp = (buffer.readUIntBE(0, 3) % 1000000)
        .toString()
        .padStart(6, "0");
      const verificationCode = await hashData(otp);
      user.verificationCode = verificationCode;
      user.verificationCodeExpirationDate = new Date(
        Date.now() + 10 * 60 * 1000
      );
      await user.save();
      await sendEmail(
        email,
        "Verification code",
        otpEmailTemplate(otp, user.fullName)
      );
      return Response.json(
        {
          success: false,
          msg: "Please verify your account first! Redirecting to account verification page.",
          redirectUrl: `/auth/verify?user=${encodeURIComponent(user.email)}`,
        },
        { status: 403 }
      );
    }
    const accessToken = generateAccessToken({ email: user.email });
    cookies().set({
      name: "accessToken",
      value: accessToken,
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      path: "/",
    });
    return Response.json(
      { success: true, msg: "Login success." },
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
