export type OrderType = {
  _id: string;
  orderCode: string;
  customer: {
    _id: string;
    fullName: string;
    email: string;
    avatar?: string;
  };
  total: number;
  subtotal: number;
  tax: number;
  discountPercentage?: number;
  dicountCode?: string;
  status: "completed" | "pending" | "shipping" | "cancelled";
  products?: ProductType[];
  createdAt?: string;
  updatedAt?: string;
};

export type ProductType = {
  _id: string;
  name: string;
  price: number;
  inventory: number;
  gallery: string[];
  options: string[];
  description: string;
  category: "car" | "bike" | "scooter";
  score: number;
  customPart: boolean;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
};

export type UserType = {
  _id: string;
  fullName: string;
  email: string;
  isBanned?: boolean;
  isVerified?: boolean;
  avatar?: string;
  role?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type DiscountType = {
  _id: string;
  discountCode: string;
  isGeneral: boolean;
  isPersonOnly: boolean;
  user: string | UserType | null;
  isProductOnly: boolean;
  product: string | ProductType | null;
  discountPercentage: number;
  expiryDate: string;
  createdAt: string;
  updatedAt: string;
};

export type TicketType = {
  _id: string;
  subject: string;
  status: "answered" | "closed" | "pending";
  creator: string | UserType;
  createdAt: string;
  updatedAt: string;
};

export type ConversationType = {
  _id: string;
  ticket: string | TicketType;
  sender: string | UserType;
  message: string;
  seenByAdmin: boolean;
  seenByUser: boolean;
  createdAt: string;
  updatedAt: string;
};

export type WishlistType = {
  _id: string;
  user: string | UserType;
  products: string[] | ProductType[];
  createdAt: string;
  updatedAt: string;
};

export type CommentType = {
  _id: string;
  product: string | ProductType;
  user: string | UserType;
  commentText: string;
  score: number;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
};

export type MessageType = {
  _id: string;
  senderEmail: string;
  senderName: string;
  senderAvatar: string | null;
  subject: string | null;
  messageText: string;
  createdAt: string;
  updatedAt: string;
};

export type TestimonialType = {
  _id: string;
  textContent: string;
  senderName: string;
  senderEmail: string;
  senderAvatar: string | null;
};
