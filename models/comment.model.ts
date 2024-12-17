import mongoose from "mongoose";
// import UserModel from "./user.model";
// import ProductModel from "./product.model";
require("./user.model");
require("./product.model");

const CommentSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    commentText: {
      type: String,
      maxlength: [1000, "Comment text can not be more than 1000 characters!"],
      required: [true, "Comment text must be provided!"],
    },
    score: {
      type: Number,
      min: [1, "Comment score can not be less than 1!"],
      max: [5, "Comment score can not be more than 5!"],
      default: 5,
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "approved", "rejected"],
        message: "{VALUE} is not a valid status type!",
      },
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const model =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);

export default model;
