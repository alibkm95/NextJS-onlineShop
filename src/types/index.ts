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
  off?: number;
  comments?: CommentType[];
  creator?: UserType | object;
  createdAt: string;
  updatedAt: string;
};

export type UserType = {
  _id: string;
  fullName: string;
  email: string;
  isBanned: boolean;
  isVerified: boolean;
  avatar: string | null;
  role: "USER" | "ADMIN" | "ROOTADMIN";
  phone?: string | null;
  address?: {
    country?: string | null;
    city?: string | null;
    street?: string | null;
    number?: string | null;
    postalCode?: string | null;
  };
  createdAt: string;
  updatedAt: string;
};

export type DiscountType = {
  _id: string;
  discountCode: string;
  discountAmount: number;
  expiryDate: string;
  createdAt: string;
  updatedAt: string;
  isExpired: boolean;
};

export type TicketType = {
  _id: string;
  subject: string;
  status: "answered" | "closed" | "pending";
  creator: {
    _id: string;
    fullName: string;
    email: string;
    avatar?: string;
  };
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
  product: ProductType | string;
  user: {
    _id: string;
    fullName: string;
    email: string;
    role?: string;
    avatar?: string;
  };
  commentText: string;
  score: 1 | 2 | 3 | 4 | 5;
  status: "approved" | "rejected" | "pending";
  createdAt: string;
  updatedAt: string;
};

export type MessageType = {
  _id: string;
  senderEmail: string;
  senderName: string;
  senderAvatar: string | null;
  messageText: string;
  seenByAdmin: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TestimonialType = {
  _id: string;
  textContent: string;
  senderName: string;
  senderEmail: string;
  senderAvatar?: string;
  createdAt: string;
  updatedAt: string;
};

export type ShoppingCartType = {
  product: ProductType;
  quantity: number;
};
