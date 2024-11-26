import React from "react";
import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import DiscountsTable from "@/components/templates/adminTables/DiscountsTable";

const Discounts = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Dashboard", path: "/admin" },
    { page: "Products", path: "/admin/products" },
    { page: "Discounts", path: null },
  ];

  return (
    <section>
      <div className="flex items-center justify-center mb-4 md:justify-start">
        <CustomBreadCrumb pagesPath={pagesPath} />
      </div>
      <div>
        <DiscountsTable />
      </div>
    </section>
  );
};

export default Discounts;
