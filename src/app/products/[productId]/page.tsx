import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import MaxWidthWrapper from "@/components/modules/MaxWidthWrapper";
import ProductDetails from "@/components/templates/product/ProductDetails";
import React from "react";

const Product = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Home", path: "/" },
    { page: "Shop", path: "/products" },
    { page: "product name", path: null },
  ];

  return (
    <section className="min-h-96 py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center gap-4 max-w-2xl mx-auto">
          <h5 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            product name
          </h5>
          <div className="my-4">
            <CustomBreadCrumb pagesPath={pagesPath} />
          </div>
        </div>
        <div className="border rounded-lg shadow-md mt-4 p-4 md:p-6">
          <ProductDetails />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Product;
