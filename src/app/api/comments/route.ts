import { NextRequest } from "next/server";
import connectToDB from "@/configs/DB";
import CommentModel from "@/models/comment.model";
import ProductModel from "@/models/product.model";
import { z } from "zod";
import { authenticateUser } from "@/lib/auth.server";
import { addCommentValidation } from "@/lib/requestValidation";

export async function POST(req: NextRequest) {
  connectToDB();
  try {
    const user = await authenticateUser(undefined);
    if (!user) {
      return Response.json(
        {
          success: false,
          msg: "Submitting a comment requires login with a valid account!",
        },
        { status: 401 }
      );
    }
    const {
      commentText,
      score,
      product: productId,
    } = addCommentValidation.parse(await req.json());
    const product = await ProductModel.findOne({ _id: productId });
    if (!product) {
      return Response.json(
        {
          success: false,
          msg: "Candidate product not found!",
        },
        {
          status: 404,
        }
      );
    }
    const duplicateComment = await CommentModel.findOne({
      product: product._id,
      user: user._id,
    });
    if (duplicateComment) {
      return Response.json(
        {
          success: false,
          msg: "You already submited a comment for this product!",
        },
        {
          status: 400,
        }
      );
    }
    await CommentModel.create({
      product: product._id,
      user: user._id,
      commentText,
      score,
    });
    return Response.json(
      { success: true, msg: "Comment submitted successfully" },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.log("Validation error:", error.issues);
      return Response.json(
        { success: false, msg: "Validation error" },
        { status: 400 }
      );
    } else {
      console.log("Unknown error:", error);
      return Response.json(
        { success: false, msg: "Unknown error" },
        { status: 500 }
      );
    }
  }
}
