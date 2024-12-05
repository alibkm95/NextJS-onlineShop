import nodemailer from "nodemailer";
import { emailValidation } from "./requestValidation";

export const sendEmail = async (
  to: string,
  subject: string,
  html: string
): Promise<void> => {
  emailValidation.parse({ to, subject, html });
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_HOST_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_AUTH_USER,
      pass: process.env.EMAIL_AUTH_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: "Mega Toys",
    to,
    subject,
    html,
  });
};
