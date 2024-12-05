import { cookies } from "next/headers";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { verifyAccessToken } from "./auth";

export const authUser = async () => {
  connectToDB();
  const token = cookies().get("token");
  let user = null;

  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload) {
      user = await UserModel.findOne({ email: tokenPayload.email });
    }
  }

  return user;
};