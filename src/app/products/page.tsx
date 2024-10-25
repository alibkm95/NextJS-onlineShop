import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import CustomPagination from "@/components/modules/CustomPagination";
import ProductCartMD from "@/components/modules/itemBox/ProductCartMD";
import MaxWidthWrapper from "@/components/modules/MaxWidthWrapper";
import ShopFilter from "@/components/templates/ShopFilter";
import { Package } from "lucide-react";

const Products = () => {
  const pagesPath: BreadrumbPathType[] = [
    { page: "Home", path: "/" },
    { page: "Shop", path: null },
  ];

  return (
    <section className="min-h-96 py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center gap-4 max-w-2xl mx-auto">
          <h5 className="text-3xl font-bold md:text-4xl lg:text-5xl">Shop</h5>
          <div className="my-4">
            <CustomBreadCrumb pagesPath={pagesPath} />
          </div>
        </div>
        <div className="border rounded-lg shadow-md mt-4">
          <div className="flex itepms-center justify-between p-4 md:p-6 border-b">
            <h2 className="flex items-center gap-2 lg:text-xl">
              <Package className="text-primary lg:size-8" />
              Products
            </h2>
            <ShopFilter />
          </div>
          <div className="p-4">
            <div className="grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <ProductCartMD />
              <ProductCartMD />
              <ProductCartMD />
              <ProductCartMD />
              <ProductCartMD />
            </div>
            <div className="py-4 mt-4">
              <CustomPagination />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Products;
