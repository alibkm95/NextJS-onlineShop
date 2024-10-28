import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { DollarSign, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCardLG = () => {
  return (
    <div className="p-2 border border-t-primary border-t-4 shadow rounded-md md:p-4">
      <div className="flex flex-col gap-2 items-center justify-center lg:flex-row lg:items-start">
        <Image
          src="/images/product-fallback.png"
          width={320}
          height={180}
          alt="product image"
          className="rounded-md w-full max-w-80 lg:max-w-60"
        />
        <div className="w-full max-w-80 lg:max-w-full flex flex-col justify-between gap-3">
          <Link href="/" className="hover:text-emerald-600 transition-all">
            <h3 className="font-semibold text-lg lg:text-2xl">Product title</h3>
          </Link>
          <Separator />
          <div>
            <span className="text-sm flex items-center">
              <DollarSign className="text-emerald-600 size-6" />
              128.50
              <span className="opacity-70 line-through ms-2">150.00</span>
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 flex items-center gap-1">
              <Button variant="outline" size="sm">
                <Plus />
              </Button>
              <Input
                type="text"
                className="h-8 rounded-md px-3 text-xs max-w-16"
                placeholder="Count ..."
              />
              <Button variant="outline" size="sm">
                <Minus />
              </Button>
            </div>
            <Button variant="destructive" size="sm">
              <Trash2 />
              <span className="hidden lg:inline">Remove this item</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardLG;
