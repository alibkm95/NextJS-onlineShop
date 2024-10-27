import ProductCardSM from "@/components/modules/itemBox/ProductCardSM";
import { Workflow } from "lucide-react";

const SimilarProducts = () => {
  return (
    <div className="p-2">
      <div className="flex items-center justify-between gap-2 w-full border-b border-dashed py-2">
        <p className="flex items-center gap-1 font-semibold">
          <Workflow className="size-4 md:size-6" />
          Similar products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 place-items-center gap-2 pt-2 px-2 md:px-4">
        <ProductCardSM />
        <ProductCardSM />
        <ProductCardSM />
        <ProductCardSM />
        <ProductCardSM />
      </div>
    </div>
  );
};

export default SimilarProducts;
