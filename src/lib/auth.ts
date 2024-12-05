import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";

export const hashPassword: (passowrd: string) => Promise<string> = async (
  password
) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const verifyPassword: (
  password: string,
  hashedPassword: string
) => Promise<boolean> = async (password, hashedPassword) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

export const generateAccessToken: (data: {}) => string = (data) => {
  const token = sign({ ...data }, process.env.AccessTokenSecretKey as string, {
    expiresIn: "1d",
  });
  return token;
};

export const verifyAccessToken: (token: string) => {} | null = (token) => {
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

// const generateRefreshToken = (data) => {
//   const token = sign({ ...data }, process.env.RefreshTokenSecretKey, {
//     expiresIn: "15d",
//   });
//   return token;
// };
