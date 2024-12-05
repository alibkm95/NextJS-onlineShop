const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "user full name must be provided!"],
    },
    email: {
      type: String,
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

export default model
