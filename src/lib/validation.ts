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
  fullName: z
    .string()
    .refine((val) => val !== "", "Full name must be provided!"),
  textMessage: z
    .string()
    .max(200, "Message con not be more than 200 characters!")
    .refine((val) => val !== "", "Text message must be provided!"),
});

export const shopFilterFormValidation = z.object({
  productName: z.string().optional(),
  category: z.enum(["all", "car", "bike", "scooter"]).default('all'),
  onlyDiscounted: z.boolean().default(false),
  sort: z.enum(["a-z", "z-a", "newest", "oldest", "popular"]),
});

export const newCommentFormValidation = z.object({
  commentText: z
    .string()
    .max(100, "Comment text can not be more than 100 characters!")
    .refine((val) => val !== "", "Comment text must be provided!"),
  score: z
    .number()
    .min(1, "Rating score must be provided!")
    .max(5, "Maximum rating score is 5!"),
});

export const editCommentFormValidation = z.object({
  commentText: z
    .string()
    .max(100, "Comment text can not be more than 100 characters!")
    .refine((val) => val !== "", "Comment text must be provided!"),
  status: z.enum(["approve", "reject"]),
});

export const invoiceFormValidation = z.object({
  discountCode: z.string().optional(),
  subTotal: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0,
      "Subtotal price must be a positive number!"
    ),
  discount: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0,
      "Discount price must be a positive number!"
    ),
  tax: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0,
      "Tax price must be a positive number!"
    ),
  total: z
    .string()
    .refine(
      (val) => !isNaN(Number(val)) && Number(val) >= 0,
      "Total price must be a positive number!"
    ),
});

export const updateProfileFormValidation = z.object({
  profileImage: z
    .instanceof(File, { message: "Please select a valid file to upload!" })
    .refine((file) => file !== undefined, "You must select a file"),
});

export const userAccountFormValidation = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters!")
    .max(50, "Name must be at most 50 characters!")
    .trim()
    .toLowerCase(),
  email: z.string().email("Invalid email address!").trim().toLowerCase(),
  phone: z
    .string()
    .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  address: z.object({
    country: z
      .string()
      .refine((val) => val !== "", "Shipping info must be provided!"),
    city: z
      .string()
      .refine((val) => val !== "", "Shipping info must be provided!"),
    street: z
      .string()
      .refine((val) => val !== "", "Shipping info must be provided!"),
    number: z
      .string()
      .refine((val) => val !== "", "Shipping info must be provided!"),
    postalCode: z
      .string()
      .refine((val) => val !== "", "Shipping info must be provided!"),
  }),
});

export const NewTicketFormValidation = z.object({
  title: z
    .string()
    .max(100, "Ticket title can not be more than 100 characters!")
    .refine((val) => val !== "", "Title must be provided!"),
  ticketMessage: z
    .string()
    .max(500, "Message con not be more than 200 characters!")
    .refine((val) => val !== "", "Ticket message must be provided!"),
  attachment: z
    .instanceof(File, {
      message: "Please select a valid file to upload!",
    })
    .optional(),
});

export const addNewMessageFormValidation = z.object({
  ticketMessage: z
    .string()
    .max(500, "Message con not be more than 200 characters!")
    .refine((val) => val !== "", "Ticket message must be provided!"),
  attachment: z
    .instanceof(File, {
      message: "Please select a valid file to upload!",
    })
    .optional(),
});

export const addNewDiscountFormValidation = z.object({
  discountCode: z
    .string()
    .min(8, "Discount code must be at least 8 characters!")
    .refine((val) => val !== "", "Discount code must be provided!"),
  discountAmount: z
    .string()
    .refine(
      (val) => /^(100|[1-9][0-9]?)$/.test(val),
      "Discount amount must be a number that represents discount percentage.(between 1-100)"
    ),
  expiryDate: z.date({
    required_error: "Expiry date must be provided!",
  }),
});

export const autoDiscountFormValidation = z.object({
  isActive: z.boolean().default(false),
  minAmount: z
    .string({
      required_error: "Minimum user payment amount must be provided!",
    })
    .refine(
      (val) => /^-?\d+(\.\d+)?$/.test(val),
      "Minimum user payment amount must be in numerical form."
    ),
  discountAmount: z
    .string({
      required_error: "Discount amount must be provided!",
    })
    .refine(
      (val) => /^(100|[1-9][0-9]?)$/.test(val),
      "Discount amount must be a number that represents discount percentage.(between 1-100)"
    ),
  validityPeriod: z
    .string({
      required_error: "Validity period must be provided!",
    })
    .refine(
      (val) => /^(30|[1-2]?\d)$/.test(val),
      "Validity period must be in numerical format max 30 days, for example: 15, which specifies that the discount code will be valid for 15 days from the date of creation."
    ),
});

export const ProductFormValidation = z.object({
  name: z
    .string()
    .refine((val) => val !== "", "Product name must be provided!"),
  price: z
    .string()
    .refine(
      (val) => /^(0|[1-9]\d*)(\.\d+)?$/.test(val),
      "Price must be provided in correct format!"
    ),
  inventory: z
    .string()
    .refine(
      (val) => /^(0|[1-9]\d*)$/.test(val),
      "Product inventory must be provided in numerical format!"
    ),
  options: z.string().array().nonempty({
    message: "Provide at least one option for Product!",
  }),
  description: z
    .string()
    .min(50, "Product description must be at least 50 characters")
    .max(1000, "product description mut be max 1000 characters"),
  category: z.enum(["car", "bike", "scooter"]),
  customPart: z.boolean().default(false),
  isPublished: z.boolean().default(true),
});

export const SendEmailFormValidation = z.object({
  email: z.string().email(),
  messageContent: z
    .string()
    .max(1000, "message can not be more than 1000 characters!")
    .refine((val) => val !== "", "message content must be provided!"),
});
