import { cookies } from "next/headers";
import UserModel from "@/models/user.model";
import connectToDB from "@/configs/DB";
import { verifyAccessToken } from "./auth";

export const authenticateUser = async () => {
  connectToDB();
  const token = cookies().get("accessToken");
  let user = null;
  if (token) {
    const tokenPayload = verifyAccessToken(token.value);
    if (tokenPayload && typeof tokenPayload !== "string") {
      user = await UserModel.findOne({ email: tokenPayload.email });
    }
  }
  return user;
};

export const authorizePermissions = async() => {
  //implement
}