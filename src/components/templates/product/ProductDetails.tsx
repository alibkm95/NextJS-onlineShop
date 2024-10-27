import ProductDetailBox from "@/components/modules/itemBox/ProductDetailBox";
import Gallery from "@/components/modules/swiper/Gallery";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DollarSign, Heart, MessageSquareHeart, Puzzle, Star } from "lucide-react";
import { IoBagAdd } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import ProductComments from "./ProductComments";
import SimilarProducts from "./SimilarProducts";

const ProductDetails = () => {
  return (
    <div className="min-h-96">
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 max-w-full">
        <Gallery />
        <div className="flex flex-col gap-4 lg:pt-6 w-full max-w-[600px] mx-auto">
          <h1 className="text-xl font-bold md:text-2xl lg:text-3xl">
            Product name
          </h1>
          <span className="flex items-center md:text-lg lg:text-xl">
            <DollarSign className="text-emerald-600" size={20} />
            128.50
            <span className="opacity-70 line-through ms-2">150.00</span>
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="outline" className="rounded-full">
              bluetooth remote
            </Badge>
            <Badge variant="outline" className="rounded-full">
              up to 60KG
            </Badge>
            <Badge variant="outline" className="rounded-full">
              4X 24V gearbox
            </Badge>
            <Badge variant="outline" className="rounded-full">
              flexible tiers
            </Badge>
            <Badge variant="outline" className="rounded-full">
              mp3 player
            </Badge>
            <Badge variant="outline" className="rounded-full">
              3.5mm jack input-output
            </Badge>
          </div>
          <div className="flex items-center flex-row-reverse gap-2 flex-wrap">
            <Button className="bg-emerald-600 hover:bg-emerald-700 [&_svg]:size-6">
              <IoBagAdd />
              Add to cart
            </Button>
            <Button variant="outline" className="[&_svg]:size-6">
              <Heart className="text-primary fill-primary" />
              Add to Wishlist
            </Button>
          </div>
          <div className="border-t p-2 text-sm lg:px-4 md:text-base">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              quibusdam at ipsam inventore alias, consequuntur perspiciatis
              necessitatibus numquam aspernatur repudiandae, veniam perferendis
              magni officiis hic nihil voluptatum natus ea dolorum iure ducimus
              eum quos. Nam exercitationem, tenetur, repudiandae nemo ipsum
              saepe sit officia non natus aliquid voluptatum, quos commodi
              praesentium.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4 place-items-center">
        <ProductDetailBox title="Category" text="cars" bg="bg-blue-700">
          <MdCategory className="size-4 md:size-6 lg:size-8" />
        </ProductDetailBox>
        <ProductDetailBox title="Score" text="5" bg="bg-amber-500">
          <Star className="size-4 md:size-6 lg:size-8 fill-white" />
        </ProductDetailBox>
        <ProductDetailBox title="Custom part" text="supported" bg="bg-primary">
          <Puzzle className="size-4 md:size-6 lg:size-8" />
        </ProductDetailBox>
        <ProductDetailBox title="Reviews" text="2,108" bg="bg-emerald-600">
          <MessageSquareHeart className="size-4 md:size-6 lg:size-8" />
        </ProductDetailBox>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-2 lg:grid-cols-3">
        <div className="border rounded-md h-max lg:col-span-2 lg:order-2">
          <ProductComments />
        </div>
        <div className="border rounded-md h-max lg:col-span-1">
          <SimilarProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
