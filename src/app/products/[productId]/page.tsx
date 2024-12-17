import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import MaxWidthWrapper from "@/components/modules/MaxWidthWrapper";
import ProductDetails from "@/components/templates/product/ProductDetails";
import connectToDB from "@/configs/DB";
import ProductModel from "@/models/product.model";
import React from "react";
import { notFound } from "next/navigation";
import { ProductType } from "@/types";
import { parseStringify } from "@/lib/utils";

interface Params {
  productId: string;
}

const Product = async ({ params }: { params: Params }) => {
  connectToDB();
  const { productId } = params;
  let product: ProductType | null = null;
  try {
    product = (await ProductModel.findOne({
      _id: productId,
      isPublished: true,
      inventory: { $gt: 0 },
    })
      .populate({
        path: "comments",
        match: { status: "approved" },
        options: { sort: { createdAt: -1 } },
        populate: {
          path: "user",
          model: "User",
          select: "_id fullName email role avatar",
        },
      })
      .select("-__v")
      .lean()) as ProductType | null;
  } catch (error) {
    return notFound();
  }

  if (!product) {
    return notFound();
  }

  const pagesPath: BreadrumbPathType[] = [
    { page: "Home", path: "/" },
    { page: "Shop", path: "/products" },
    { page: product.name || "Product", path: null },
  ];

  return (
    <section className="min-h-96 py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center gap-4 max-w-2xl mx-auto">
          <h5 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            {product.name}
          </h5>
          <div className="my-4">
            <CustomBreadCrumb pagesPath={pagesPath} />
          </div>
        </div>
        <div className="border rounded-lg shadow-md mt-4 p-4 md:p-6">
          <ProductDetails product={parseStringify(product)} />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Product;
