import mongoose from "mongoose";
import UserModel from "./user.model";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name must be provided!"],
    },
    price: {
      type: Number,
      required: [true, "Product price must be provided!"],
    },
    inventory: {
      type: Number,
      default: 1,
    },
    gallery: {
      type: [String],
      default: [],
    },
    options: {
      type: [String],
      default: [],
    },
    description: {
      type: String,
      maxlength: [
        1000,
        "Product description can not be more that 1000 characters!",
      ],
      required: [true, "Product description must be provided!"],
    },
    category: {
      type: String,
      enum: {
        values: ["car", "bike", "scooter"],
        message: "{VALUE} is not a valid category!",
      },
    },
    score: {
      type: Number,
      min: [1, "Product score can not be less than 1!"],
      max: [5, "Product score can not be more than 5!"],
      default: 5,
    },
    customPart: {
      type: Boolean,
      default: false,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    off: {
      type: Number,
      min: [0, "Product 0ff can not be less than 0!"],
      max: [100, "Product 0ff can not be more than 100!"],
      default: 0,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Product creator must be provided!"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

ProductSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "product",
  justOne: false,
});

const model =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default model;
