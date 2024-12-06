import { NextRequest } from "next/server";
import connectToDB from "@/configs/DB";
import UserModel from "@/models/user.model";
import { generateAccessToken, verifyHashedData } from "@/lib/auth";
import { cookies } from "next/headers";

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
