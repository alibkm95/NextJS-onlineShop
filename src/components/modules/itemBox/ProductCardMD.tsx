import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { calculateOffPrice, cn } from "@/lib/utils";
import { ProductType } from "@/types";
import { ArrowRight, DollarSign, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardMDProps {
  product: ProductType;
}

const ProductCardMD = ({ product }: ProductCardMDProps) => {
  return (
    <div className="w-full max-w-[280px] h-full border bg-background flex flex-col rounded-lg overflow-hidden shadow-md mx-auto">
      <Image
        src={
          product.gallery.length > 0
            ? `/uploads/products/${product.gallery[0]}`
            : `/images/product-fallback.png`
        }
        width={320}
        height={180}
        alt="product"
        className="w-full"
        priority={false}
      />
      <div className="flex-1 py-3 px-4 space-y-3">
        <Link
          href={`/products/${product._id}`}
          className="hover:text-emerald-600 transition-all"
        >
          <h3 className="truncate whitespace-nowrap overflow-hidden font-semibold text-lg">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-between gap-2">
          {product.off! > 0 ? (
            <span className="text-sm flex items-center justify-center md:justify-start">
              <DollarSign className="text-emerald-600" size={15} />
              {calculateOffPrice(product.price, product.off!)}
              <span className="opacity-70 line-through ms-2">
                {product.price}
              </span>
            </span>
          ) : (
            <span className="text-sm flex items-center justify-center md:justify-start">
              <DollarSign className="text-emerald-600" size={15} />
              {product.price}
            </span>
          )}
          <div className="flex items-center gap-1">
            <Star className="text-amber-500 size-4 fill-amber-500" />
            <span className="m-0 p-0 text-sm font-semibold">
              {product.score}
            </span>
          </div>
        </div>
      </div>
      <Separator className="mx-auto w-[95%]" />
      <div className="p-2 ms-auto">
        <Link
          href={`/products/${product._id}`}
          className={cn(buttonVariants({ variant: "outline" }), "w-max")}
        >
          Details <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProductCardMD;
