import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Home, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductNotFound = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 place-items-center">
      <Image
        src="/images/404.svg"
        width={500}
        height={500}
        alt="not found image"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-center">
          Not found!
        </h1>
        <p className="text-center text-sm md:text-base lg:text-lg">
          Sorry, No products found matching your query. Please try later or
          reset filters. Also you can search based on products name
          specifically.
        </p>
        <div className="flex items-center justify-center gap-1 flex-wrap">
          <Link
            href="/"
            className={cn(
              buttonVariants(),
              "bg-emerald-600 hover:bg-emerald-700"
            )}
          >
            <Home />
            Go to Home
          </Link>
          <Link
            href="/search"
            className={cn(buttonVariants(), "bg-blue-600 hover:bg-blue-700")}
          >
            <Search />
            Go to search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductNotFound;
