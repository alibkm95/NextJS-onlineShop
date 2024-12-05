import { NextRequest } from "next/server";
import { sendEmail } from "@/lib/sendEmail";
import { z } from "zod";

export async function POST(req: NextRequest) {
  const { to, subject, html } = await req.json();
  try {
    await sendEmail(to, subject, html);
    return Response.json(
      { success: true, msg: "email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log('Validation error:', error.issues);
      return Response.json(
        { success: false, msg: 'Validation error', errors: error.issues },
        { status: 400 }
      );
    } else {
      console.log('Unknown error:', error);
      return Response.json(
        { success: false, msg: 'Unknown error' },
        { status: 500 }
      );
    }
  }
}
