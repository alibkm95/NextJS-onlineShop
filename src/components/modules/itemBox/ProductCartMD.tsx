import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ArrowRight, DollarSign, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCartMD = () => {
  return (
    <div className="w-full max-w-[280px] h-full border bg-background flex flex-col rounded-lg overflow-hidden shadow-md mx-auto">
      <Image
        src="/images/product-fallback.png"
        width={320}
        height={180}
        alt="product"
        className="w-full"
        priority={false}
      />
      <div className="flex-1 py-3 px-4 space-y-3">
        <Link href="/" className="hover:text-emerald-600 transition-all">
          <h3 className="truncate whitespace-nowrap overflow-hidden font-semibold text-lg">
            Product title
          </h3>
        </Link>
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm flex items-center justify-center md:justify-start">
            <DollarSign className="text-emerald-600" size={15} />
            128.50
            <span className="opacity-70 line-through ms-2">150.00</span>
          </span>
          <div className="flex items-center gap-1">
            <Star className="text-amber-500 size-4 fill-amber-500" />
            <span className="m-0 p-0 text-sm font-semibold">5</span>
          </div>
        </div>
      </div>
      <Separator className="mx-auto w-[95%]" />
      <div className="p-2 ms-auto">
        <Link
          href="/product/123"
          className={cn(buttonVariants({ variant: "outline" }), "w-max")}
        >
          Details <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default ProductCartMD;
