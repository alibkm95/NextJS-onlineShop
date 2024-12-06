import { NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function DELETE(req: NextRequest) {
  try {
    cookies().set({
      name: "accessToken",
      value: "logged out",
      expires: Date.now(),
      httpOnly: true,
      path: "/",
    });
    return Response.json(
      { success: true, msg: "Logout success." },
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