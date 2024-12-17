import { cookies } from "next/headers";
import UserModel from "@/models/user.model";
import connectToDB from "@/configs/DB";
import { verifyAccessToken } from "./auth";
import { UserType } from "@/types";

export const authenticateUser = async (token: string | undefined) => {
  connectToDB();
  const accessToken = token || cookies().get("accessToken")?.value;
  let user: UserType | null = null;
  if (accessToken) {
    const tokenPayload = verifyAccessToken(accessToken);
    if (tokenPayload && typeof tokenPayload !== "string") {
      user = (await UserModel.findOne({ email: tokenPayload.email })
        .select(
          "-password -__v -verificationCode -verificationCodeExpirationDate -resetPasswordCode -resetPasswordCodeExpirationDate"
        )
        .lean()) as UserType | null;
    }
  }
  return user;
};
