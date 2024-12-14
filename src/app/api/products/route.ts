import { NextRequest } from "next/server";
import connectToDB from "@/configs/DB";
import ProductModel from "@/models/product.model";

export async function GET(req: NextRequest) {
  connectToDB();
  try {
    const products = await ProductModel.find({
      isPublished: true,
      inventory: { $gt: 0 },
    });
    return Response.json(
      {
        success: true,
        products,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Unknown error:", error);
    return Response.json(
      { success: false, msg: "Unknown error" },
      { status: 500 }
    );
  }
}
