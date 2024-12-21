import connectToDB from "@/configs/DB";
import { authenticateUser } from "@/lib/auth.server";
import WishModel from "@/models/wish.model";
import ProductModel from "@/models/product.model";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  connectToDB();
  try {
    const user = await authenticateUser(undefined);
    if (!user) {
      return Response.json(
        { success: false, msg: "Unauthorized!" },
        { status: 401 }
      );
    }
    const wishes = await WishModel.find({ user: user._id }).populate("product");
    return Response.json({ success: true, wishes }, { status: 200 });
  } catch (error) {
    console.log("Unknown error:", error);
    return Response.json(
      { success: false, msg: "Unknown error" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  connectToDB();
  try {
    const user = await authenticateUser(undefined);
    if (!user) {
      return Response.json(
        { success: false, msg: "Unauthorized!" },
        { status: 401 }
      );
    }
    const { productId } = await req.json();
    if (!productId) {
      return Response.json(
        { success: false, msg: "Candidate product must be provided!" },
        { status: 400 }
      );
    }
    const existingProduct = await ProductModel.findOne({
      _id: productId,
      isPublished: true,
      inventory: { $gt: 0 },
    });
    if (!existingProduct) {
      return Response.json(
        { success: false, msg: "Candidate product not found!" },
        { status: 404 }
      );
    }
    const existingWish = await WishModel.findOne({
      user: user._id,
      product: productId,
    });
    if (existingWish) {
      return Response.json(
        {
          success: false,
          msg: "Requested item is already exists in your wishlist!",
        },
        { status: 409 }
      );
    }
    const wish = await WishModel.create({
      user: user._id,
      product: productId,
    });
    await wish.populate("product");
    return Response.json({ success: true, wish }, { status: 201 });
  } catch (error) {
    console.log("Unknown error:", error);
    return Response.json(
      { success: false, msg: "Unknown error" },
      { status: 500 }
    );
  }
}
