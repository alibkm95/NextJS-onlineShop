import ProductDetailBox from "@/components/modules/itemBox/ProductDetailBox";
import Gallery from "@/components/modules/swiper/Gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DollarSign,
  Heart,
  MessageSquareHeart,
  Puzzle,
  Star,
} from "lucide-react";
import { IoBagAdd } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import ProductComments from "./ProductComments";
import SimilarProducts from "./SimilarProducts";
import { ProductType } from "@/types";
import { calculateOffPrice } from "@/lib/utils";

interface ProductDetailsProps {
  product: ProductType;
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  return (
    <div className="min-h-96">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 max-w-full">
        <Gallery imgSet={product.gallery} />
        <div className="flex flex-col gap-4 lg:pt-6 w-full max-w-[600px] mx-auto">
          <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
            {product.name}
          </h1>
          {product.off! > 0 ? (
            <span className="flex items-center md:text-lg lg:text-xl">
              <DollarSign className="text-emerald-600" size={15} />
              {calculateOffPrice(product.price, product.off!)}
              <span className="opacity-70 line-through ms-2">
                {product.price}
              </span>
            </span>
          ) : (
            <span className="flex items-center md:text-lg lg:text-xl">
              <DollarSign className="text-emerald-600" size={15} />
              {product.price}
            </span>
          )}
          <div className="flex items-center gap-2 flex-wrap">
            {product.options.length > 0 &&
              product.options.map((option, idx) => (
                <Badge variant="outline" className="rounded-full" key={idx}>
                  {option}
                </Badge>
              ))}
          </div>
          <div className="flex items-center flex-row-reverse gap-2 flex-wrap">
            <Button className="bg-emerald-600 hover:bg-emerald-700 [&_svg]:size-6">
              {/* todo: handle add to cart */}
              <IoBagAdd />
              Add to cart
            </Button>
            <Button variant="outline" className="[&_svg]:size-6">
              {/* todo: handle add to wishes or remove from wish list */}
              <Heart className="text-primary fill-primary" />
              Add to Wishlist
            </Button>
          </div>
          <div className="border-t p-2 text-sm lg:px-4 md:text-base">
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4 place-items-center">
        <ProductDetailBox
          title="Category"
          text={product.category}
          bg="bg-blue-700"
        >
          <MdCategory className="size-4 md:size-6 lg:size-8" />
        </ProductDetailBox>
        <ProductDetailBox
          title="Score"
          text={product.score.toString()}
          bg="bg-amber-500"
        >
          <Star className="size-4 md:size-6 lg:size-8 fill-white" />
        </ProductDetailBox>
        <ProductDetailBox
          title="Spare parts"
          text={product.customPart ? "Yes" : "No"}
          bg="bg-primary"
        >
          <Puzzle className="size-4 md:size-6 lg:size-8" />
        </ProductDetailBox>
        <ProductDetailBox
          title="Reviews"
          text={product.comments?.length.toString() || "0"}
          bg="bg-emerald-600"
        >
          <MessageSquareHeart className="size-4 md:size-6 lg:size-8" />
        </ProductDetailBox>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2 lg:grid-cols-3">
        <div className="border rounded-md h-max lg:col-span-2 lg:order-2">
          <ProductComments comments={product.comments} />
        </div>
        <div className="border rounded-md h-max lg:col-span-1">
          <SimilarProducts category={product.category} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
