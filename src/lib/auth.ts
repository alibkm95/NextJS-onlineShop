import { hash, compare } from "bcryptjs";
import { JwtPayload, sign, verify } from "jsonwebtoken";

export const hashData: (data: string) => Promise<string> = async (data) => {
  const hashedPassword = await hash(data, 12);
  return hashedPassword;
};

export const verifyHashedData: (
  data: string,
  hashedData: string
) => Promise<boolean> = async (data, hashedData) => {
  const isValid = await compare(data, hashedData);
  return isValid;
};

export const generateAccessToken: (data: {}) => string = (data) => {
  const token = sign({ ...data }, process.env.AccessTokenSecretKey as string, {
    expiresIn: "1d",
  });
  return token;
};

export const verifyAccessToken: (
  token: string
) => string | JwtPayload | null = (token) => {
  try {
    const tokenPayload = verify(
      token,
      process.env.AccessTokenSecretKey as string
    );
    return tokenPayload;
  } catch (err) {
    console.log("Verify Access Token Error ->", err);
    return null;
  }
};
