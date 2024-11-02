import CustomPagination from "@/components/modules/CustomPagination";
import ProductCardMD from "@/components/modules/itemBox/ProductCardMD";
import SectionNotFound from "@/components/modules/SectionNotFound";

const UserWishes = () => {
  return (
    <div className="p-2 min-h-64">
      <SectionNotFound title="Not found!" message="Your wishlist is empty!" />
      <div className="grid place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <ProductCardMD />
        <ProductCardMD />
        <ProductCardMD />
        <ProductCardMD />
        <ProductCardMD />
      </div>
      <div className="py-4 mt-4">
        <CustomPagination />
      </div>
    </div>
  );
};

export default UserWishes;
