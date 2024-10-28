import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import InvoiceForm from "@/components/modules/forms/InvoiceForm";
import ProductCardLG from "@/components/modules/itemBox/ProductCardLG";
import MaxWidthWrapper from "@/components/modules/MaxWidthWrapper";
import React from "react";

const ShoppingCart = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Home", path: "/" },
    { page: "User pane", path: "/panel" },
    { page: "Shoping cart", path: null },
  ];

  return (
    <section className="min-h-96 py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center gap-4 max-w-2xl mx-auto">
          <h5 className="text-3xl font-bold md:text-4xl lg:text-5xl">
            Shopping cart
          </h5>
          <div className="my-4">
            <CustomBreadCrumb pagesPath={pagesPath} />
          </div>
        </div>
        <div className="border rounded-lg shadow-md mt-4 p-4 md:p-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-4 lg:col-span-2">
              <ProductCardLG />
              <ProductCardLG />
              <ProductCardLG />
              <ProductCardLG />
            </div>
            <div>
              <InvoiceForm />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ShoppingCart;
