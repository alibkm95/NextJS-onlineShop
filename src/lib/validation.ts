import { z } from "zod";

export const RegisterFormValidation = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters!")
    .max(50, "Name must be at most 50 characters!")
    .trim()
    .toLowerCase(),
  email: z.string().email("Invalid email address!").trim().toLowerCase(),
  password: z
    .string()
    .min(8, "password must be at least 8 characters")
    .refine(
      (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password),
      "Password must contain at least one upper case, one lower case and one digit!"
    ),
  terms: z
    .boolean()
    .refine((val) => val === true, "You must accept the terms and conditions"),
});

export const LoginFormValidation = z.object({
  email: z.string().email("Invalid email address!"),
  password: z.string().min(8, "Password must be at least 8 characters!"),
});

export const VerifyFormValidation = z.object({
  otpCode: z.string().min(6, "OPT code must be at least 6 characters!"),
});

export const findAccountFormValidation = z.object({
  email: z.string().email("Invalid email address!"),
});

export const resetFormValidation = z.object({
  otpCode: z.string().min(6, "OPT code must be at least 6 characters!"),
  password: z
    .string()
    .min(8, "password must be at least 8 characters")
    .refine(
      (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password),
      "Password must contain at least one upper case, one lower case and one digit!"
    ),
});

export const ContactFormValidation = z.object({
  email: z.string().email("Invalid email address!"),
  textMessage: z
    .string()
    .max(200, "Message con not be more than 200 characters!")
    .refine((val) => val !== "", "Text message must be provided!"),
});

export const shopFilterFormValidation = z.object({
  category: z.enum(["all", "cars", "bikes", "scooters", "parts"]),
  minPrice: z
    .string()
    .optional()
    .refine(
      (val) => /^(0|[1-9]\d{0,3}|10000)(\.\d+)?$/.test(val!),
      "The minimum price range must be between 0 and 10,000!"
    ),
  maxPrice: z
    .string()
    .optional()
    .refine(
      (val) => /^(0|[1-9]\d{0,3}|10000)(\.\d+)?$/.test(val!),
      "The maximum price range must be between 0 and 10,000!"
    ),
  hasDiscount: z.boolean().default(false),
  sort: z.enum(["a-z", "z-a", "newest", "oldest", "popular"]),
});

export const newCommentFormValidation = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters!")
    .max(50, "Name must be at most 50 characters!")
    .trim()
    .toLowerCase(),
  email: z.string().email("Invalid email address!").trim().toLowerCase(),
  commentText: z
    .string()
    .max(100, "Comment text can not be more than 100 characters!")
    .refine((val) => val !== "", "Comment text must be provided!"),
  score: z
    .number()
    .min(1, "Rating score must be provided!")
    .max(5, "Maximum rating score is 5!"),
});
