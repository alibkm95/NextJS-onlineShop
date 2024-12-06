import { authenticateUser } from "@/lib/auth.server";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const user = await authenticateUser();
    if (!user) {
      return Response.json(
        { success: false, msg: "Unauthorized!" },
        { status: 401 }
      );
    }
    return Response.json({ success: true, user }, { status: 200 });
  } catch (error) {
    console.log("Unknown error:", error);
    return Response.json(
      { success: false, msg: "Unknown error" },
      { status: 500 }
    );
  }
}
