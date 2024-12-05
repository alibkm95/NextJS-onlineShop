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

})