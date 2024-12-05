import { z } from "zod";

export const emailValidation = z.object({
  to: z.string().email("Invalid email address!"),
  subject: z
    .string()
    .max(100, "email subject cannot be more than 100 characters!")
    .refine((val) => val !== "", "Email subject must be provided!"),
  html: z
    .string()
    .refine((val) => val !== "", "email message must be provided!"),
});

export const registerValidation = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters!")
    .max(50, "Name must be at most 50 characters!")
    .trim()
    .toLowerCase()
    .refine((val) => val !== "", "Full name must be provided!"),
  email: z.string().email("Invalid email address!").trim().toLowerCase(),
  password: z
    .string()
    .min(8, "password must be at least 8 characters")
    .refine(
      (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password),
      "Password must contain at least one upper case, one lower case and one digit!"
    ),
});
