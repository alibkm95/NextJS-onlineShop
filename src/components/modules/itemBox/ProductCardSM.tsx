import { Button } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";
import { calculateOffPrice } from "@/lib/utils";
import { ProductType } from "@/types";
import { DollarSign, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardSMProps {
  btnAction?: () => void;
  useCloser?: boolean;
  product: ProductType;
}

const ProductCardSM = ({
  btnAction,
  product,
  useCloser,
}: ProductCardSMProps) => {
  return (
    <div className="border rounded-sm p-2 bg-secondary space-y-2 w-full max-w-72 lg:max-w-full mx-auto">
      <div className="flex flex-col items-center gap-2 md:flex-row">
        <Image
          src={
            product.gallery.length > 0
              ? `/uploads/products/${product.gallery[0]}`
              : `/images/product-fallback.png`
          }
          width={100}
          height={100}
          alt="product"
          className="rounded-sm max-w-24"
        />
        <div className="space-y-1 flex-1 w-full">
          {useCloser ? (
            <SheetClose asChild>
              <Link
                href={`/products/${product._id}`}
                className="text-foreground font-semibold text-center block hover:underline hover:text-primary md:text-start"
              >
                {product.name}
              </Link>
            </SheetClose>
          ) : (
            <Link
              href={`/products/${product._id}`}
              className="text-foreground font-semibold text-center block hover:underline hover:text-primary md:text-start"
            >
              {product.name}
            </Link>
          )}
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
        </div>
      </div>
      {btnAction && (
        <Button
          variant="destructive"
          size="sm"
          className="w-full"
          onClick={btnAction}
        >
          <Trash />
          Remove
        </Button>
      )}
    </div>
  );
};

export default ProductCardSM;
