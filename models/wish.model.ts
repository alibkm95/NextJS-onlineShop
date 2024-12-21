import mongoose from "mongoose";
require("./user.model");
require("./product.model");

const WishSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User must be provided!"],
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: [true, "Product must be provided!"],
    },
  },
  {
    timestamps: true,
  }
);

const model = mongoose.models.Wish || mongoose.model("Wish", WishSchema);

export default model;
