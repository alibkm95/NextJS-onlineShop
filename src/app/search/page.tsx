import CustomBreadCrumb, {
  BreadrumbPathType,
} from "@/components/modules/CustomBreadCrumb";
import CustomPagination from "@/components/modules/CustomPagination";
import ProductCartMD from "@/components/modules/itemBox/ProductCartMD";
import MaxWidthWrapper from "@/components/modules/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchPage = () => {
  const searchResult = [1];
  const pagesPath: BreadrumbPathType[] = [
    { page: "Home", path: "/" },
    { page: "Search", path: null },
  ];

  return (
    <section className="min-h-96 py-8 md:py-10 lg:py-12">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center gap-4 max-w-2xl mx-auto">
          <h5 className="text-3xl font-bold md:text-4xl lg:text-5xl">Search</h5>
          <div className="my-4">
            <CustomBreadCrumb pagesPath={pagesPath} />
          </div>
          <div className="w-full flex items-center gap-1">
            <Input
              type="text"
              placeholder="Enter your search query..."
              className="text-lg flex-1"
            />
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              variant="default"
            >
              Search <Search />
            </Button>
          </div>
          <span className="text-sm text-gray-400 font-light">
            Your search result will appear down below.
          </span>
        </div>
        <div className="my-8 p-2 md:p-4 lg:p-6 border rounded-lg shadow">
          {/* TODO: Not found implementation when there is no search result */}
          {searchResult.length === 0 ? (
            <div className="w-full max-w-2xl mx-auto">
              <img
                src="/images/search.svg"
                alt="search"
                className="block w-full opacity-90"
              />
            </div>
          ) : (
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">
              <ProductCartMD />
              <ProductCartMD />
              <ProductCartMD />
              <ProductCartMD />
              <ProductCartMD />
              <ProductCartMD />
            </div>
          )}
          <div className="mt-8">
            <CustomPagination />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SearchPage;
