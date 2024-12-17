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

export const resetValidation = z.object({
  email: z.string({ required_error: "Email must be provided!" }).email(),
  otpCode: z
    .string({ required_error: "OTP-Code must be provided!" })
    .min(6, "OTP-Code must be a 6-digit number!")
    .refine((val) => val !== "", "OTP-Code must be provided!"),
  password: z
    .string({ required_error: "New password must be provided!" })
    .min(8, "New password must be at least 8 characters")
    .refine(
      (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password),
      "New password must contain at least one upper case, one lower case and one digit!"
    ),
});

export const productValidation = z.object({
  name: z.string({ required_error: "Product name must be provided!" }),
  price: z
    .string({
      required_error: "Product price most be provided!",
    })
    .refine(
      (val) => /^(0|[1-9]\d*)(\.\d+)?$/.test(val),
      "Price must be provided in correct format!"
    ),
  inventory: z
    .string({
      required_error: "Product inventory must be provided!",
    })
    .default("1")
    .refine(
      (val) => /^(0|[1-9]\d*)$/.test(val),
      "Product inventory must be provided in numerical format!"
    )
    .transform((val) => Number(val)),
  gallery: z.string().array().nonempty({
    message: "Provide at least one image for Product!",
  }),
  options: z.string().array().nonempty({
    message: "Provide at least one option for Product!",
  }),
  description: z
    .string()
    .min(50, "Product description must be at least 50 characters")
    .max(1000, "Product description mut be max 1000 characters"),
  category: z.enum(["car", "bike", "scooter"]),
  customPart: z.boolean().default(false),
  isPublished: z.boolean().default(true),
  off: z
    .string({
      required_error: "Product off must be provided!",
    })
    .default("0")
    .refine(
      (val) => /^(0|[1-9]\d?|100)$/.test(val),
      "Product off must be a number between 0 and 100!"
    )
    .transform((val) => Number(val)),
});

export const addCommentValidation = z.object({
  product: z.string({ required_error: "Candidate product must be provided!" }),
  commentText: z
    .string({ required_error: "Comment text must be provided!" })
    .max(100, "Comment text can not be more than 100 characters!"),
  score: z
    .number()
    .min(1, "Rating score must be provided!")
    .max(5, "Maximum rating score is 5!"),
});
