import { NextRequest } from "next/server";
import connectToDB from "@/configs/DB";
import UserModel from "@/models/user.model";
import { z } from "zod";
import { registerValidation } from "@/lib/requestValidation";
import { generateAccessToken, hashPassword } from "@/lib/auth";
import { cookies } from "next/headers";

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
    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({ email });
    const isFirstUser: boolean = (await UserModel.countDocuments()) === 0;
    await UserModel.create({
      fullName,
      email,
      password: hashedPassword,
      role: isFirstUser ? "ROOTADMIN" : "USER",
    });
    cookies().set({
      name: "accessToken",
      value: accessToken,
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      path: "/",
    });
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
        { success: false, msg: "Validation error", errors: error.issues },
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
