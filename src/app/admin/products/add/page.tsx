import React from "react";
import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import ProductForm from "@/components/modules/forms/ProductForm";

const AddProduct = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Dashboard", path: "/admin" },
    { page: "Products", path: "/admin/products" },
    { page: "Add new product", path: null },
  ];

  return (
    <section>
      <div className="flex items-center justify-center mb-4 md:justify-start">
        <CustomBreadCrumb pagesPath={pagesPath} />
      </div>
      <div>
        <ProductForm />
      </div>
    </section>
  );
};

export default AddProduct;
