"use client";
import ProductCardSM from "@/components/modules/itemBox/ProductCardSM";
import SimilarProductsNotFound from "@/components/modules/notFound/SimilarProductsNotFound";
import SimilarProductsSkeleton from "@/components/modules/skeleton/SimilarProductsSkeleton";
import { fetchProducts } from "@/store/features/ProductsSlice";
import { AppDispatch, RootState } from "@/store/store";
import { Workflow } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

interface SimilarProductsProps {
  category: string;
}

const SimilarProducts = ({ category }: SimilarProductsProps) => {
  const { productId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, products } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (!products) {
      dispatch(fetchProducts());
    }
  }, []);

  const similarProducts = useMemo(() => {
    return products
      ? [...products]
          .filter((product) => product._id !== productId)
          .filter((product) => product.category === category)
          .slice(0, 6)
      : null;
  }, [products]);

  return (
    <div className="p-2">
      <div className="flex items-center justify-between gap-2 w-full border-b border-dashed py-2">
        <p className="flex items-center gap-1 font-semibold">
          <Workflow className="size-4 md:size-6" />
          Similar products
        </p>
      </div>
      <div className="flex items-center just-center gap-2 py-2 flex-wrap">
        {loading && <SimilarProductsSkeleton />}
        {error && <SimilarProductsNotFound />}
        {similarProducts &&
          similarProducts.map((product) => (
            <ProductCardSM key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
