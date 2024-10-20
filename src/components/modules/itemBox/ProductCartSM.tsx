import { Button } from "@/components/ui/button";
import { DollarSign, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProductCartSM = () => {
  return (
    <div className="border rounded-sm p-2 bg-secondary space-y-2">
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <Image
          src="/images/product-fallback.png"
          width={100}
          height={100}
          alt="product"
          className="rounded-sm max-w-24"
        />
        <div className="space-y-1 flex-1 w-full">
          <Link
            href="/products/123"
            className="text-foreground font-semibold text-center block hover:underline hover:text-primary md:text-start"
          >
            Product Name
          </Link>
          <span className="text-sm flex items-center justify-center md:justify-start">
            <DollarSign className="text-emerald-600" size={15} />
            128.50
            <span className="opacity-70 line-through ms-2">150.00</span>
          </span>
        </div>
      </div>
      <Button variant="destructive" size="sm" className="w-full">
        <Trash />
        Remove
      </Button>
    </div>
  );
};

export default ProductCartSM;
