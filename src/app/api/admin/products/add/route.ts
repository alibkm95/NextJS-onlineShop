import { NextRequest } from "next/server";
import connectToDB from "@/configs/DB";
import ProductModel from "@/models/product.model";
import { z } from "zod";
import { productValidation } from "@/lib/requestValidation";
import { authenticateUser } from "@/lib/auth.server";
import { parseStringify } from "@/lib/utils";

export async function POST(req: NextRequest) {
  connectToDB();
  try {
    const user = await authenticateUser(undefined);
    const {
      name,
      price,
      inventory,
      gallery,
      options,
      description,
      category,
      customPart,
      isPublished,
      off,
    } = productValidation.parse(await req.json());
    const product = await ProductModel.create({
      name,
      price,
      inventory,
      gallery,
      options,
      description,
      category,
      customPart,
      isPublished,
      off,
      creator: user ? parseStringify(user)._id : null,
    });
    if (!product) {
      return Response.json(
        {
          success: false,
          msg: "Add new product faild!",
        },
        {
          status: 400,
        }
      );
    }
    return Response.json(
      {
        success: true,
        msg: "Product added successfully.",
        product,
      },
      {
        status: 201,
      }
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
