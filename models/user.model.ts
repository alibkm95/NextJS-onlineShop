import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "user full name must be provided!"],
    },
    email: {
      type: String,
      unique: [true, "provided email is already in use!"],
      index: true,
      required: [true, "user email must be provided"],
    },
    avatar: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: {
        values: ["USER", "ADMIN", "ROOTADMIN"],
        message: "{VALUE} is not a valid role!",
      },
      default: "USER",
    },
    password: {
      type: String,
      required: [true, "password must be provided!"],
    },
    phone: {
      type: String,
      default: null,
    },
    address: {
      country: { type: String, default: null },
      city: { type: String, default: null },
      street: { type: String, default: null },
      number: { type: String, default: null },
      postalCode: { type: String, default: null },
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifiedIn: Date,
    isBanned: {
      type: Boolean,
      default: false,
    },
    verificationCode: String,
    verificationCodeExpirationDate: Date,
    resetPasswordCode: String,
    resetPasswordCodeExpirationDate: Date,
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.User || mongoose.model("User", UserSchema);

export default model;
