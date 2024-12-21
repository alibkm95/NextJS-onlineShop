"use client";
import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import CustomPagination from "@/components/modules/CustomPagination";
import ProductCardMD from "@/components/modules/itemBox/ProductCardMD";
import MaxWidthWrapper from "@/components/modules/MaxWidthWrapper";
import ProductNotFound from "@/components/modules/notFound/ProductNotFound";
import SwiperSkeleton from "@/components/modules/skeleton/SwiperSkeleton";
import ShopFilter from "@/components/templates/ShopFilter";
import { fetchProducts } from "@/store/features/ProductsSlice";
import { AppDispatch, RootState } from "@/store/store";
import { ProductType } from "@/types";
import { Package } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, products } = useSelector(
    (state: RootState) => state.products
  );
  const pagesPath: BreadrumbPathType[] = [
    { page: "Home", path: "/" },
    { page: "Shop", path: null },
  ];
  const [paginatedProducts, setPaginatedProducts] = useState<ProductType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const itemPerPage = 12;
  const endIndex = page * itemPerPage;
  const startIndex = endIndex - itemPerPage;
  const productsContainerRef = useRef<HTMLDivElement | null>(null);
  const [firstRender, setFirstRender] = useState<boolean>(true);

  useEffect(() => {
    if (!products) {
      dispatch(fetchProducts());
    }
  }, []);

  useEffect(() => {
    if (products) {
      const pageItems = products.slice(startIndex, endIndex);
      setTotalPages(Math.ceil(products.length / itemPerPage));
      setPaginatedProducts(pageItems);
      if (productsContainerRef.current && !firstRender) {
        productsContainerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      setFirstRender(false);
    }
  }, [page, products]);

  const handleNextPage = () => {
    if (page === totalPages) {
      return toast("No more pages available!", { icon: "🤔" });
    }

    setPage((prev) => {
      return prev + 1;
    });
  };

  const handlePrevPage = () => {
    if (page === 1) {
      return toast("this is first page!", { icon: "🤔" });
    }

    setPage((prev) => {
      return prev - 1;
    });
  };

  return (
    <section className="min-h-96 py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center gap-4 max-w-2xl mx-auto">
          <h5 className="text-3xl font-bold md:text-4xl lg:text-5xl">Shop</h5>
          <div className="my-4">
            <CustomBreadCrumb pagesPath={pagesPath} />
          </div>
        </div>
        <div
          className="border rounded-lg shadow-md mt-4"
          ref={productsContainerRef}
        >
          <div className="flex itepms-center justify-between p-4 md:p-6 border-b">
            <h2 className="flex items-center gap-2 lg:text-xl">
              <Package className="text-primary lg:size-8" />
              Products
            </h2>
            <ShopFilter />
          </div>
          <div className="p-4">
            {loading && <SwiperSkeleton />}
            {paginatedProducts.length > 0 && (
              <div className="grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {paginatedProducts.map((product) => (
                  <ProductCardMD product={product} key={product._id} />
                ))}
              </div>
            )}
            {paginatedProducts.length === 0 && !loading && <ProductNotFound />}
            {totalPages > 1 && (
              <div className="py-4 mt-4">
                <CustomPagination
                  page={page}
                  totalPages={totalPages}
                  onNextPage={handleNextPage}
                  onPrevPage={handlePrevPage}
                />
              </div>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Products;
