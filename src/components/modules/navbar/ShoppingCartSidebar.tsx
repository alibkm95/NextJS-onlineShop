import { Button, buttonVariants } from "@/components/ui/button";
import {
  CreditCard,
  ShoppingCart as ShoppingCartIcon,
  Trash,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import React from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ProductCardSM from "../itemBox/ProductCardSM";
import { ScrollArea } from "@/components/ui/scroll-area";

const ShoppingCartSidebar = () => {
  const userCart = [1];

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:[&_svg]:size-6">
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col h-full gap-3">
            <SheetHeader>
              <SheetTitle>Shopping Cart</SheetTitle>
              <SheetDescription>
                5 products in your shopping cart
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <div className="flex-1">
              <ScrollArea className="h-max">
                <div className="flex flex-col gap-2 w-full">
                  {userCart.length === 0 ? (
                    <div>
                      <Image
                        src="/images/empty-cart.png"
                        width={300}
                        height={300}
                        alt="empty-cart"
                        className="w-2/3 mx-auto"
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <ProductCardSM showBtn={true} />
                      <ProductCardSM showBtn={true} />
                      <ProductCardSM showBtn={true} />
                      <ProductCardSM showBtn={true} />
                      <ProductCardSM showBtn={true} />
                    </div>
                  )}
                </div>
              </ScrollArea>
            </div>
            <Separator />
            <SheetFooter className="w-full">
              <div className="w-full flex flex-col gap-2">
                <SheetClose asChild>
                  <Link
                    href="/cart"
                    className={cn(
                      buttonVariants(),
                      "bg-emerald-600 hover:bg-emerald-500"
                    )}
                  >
                    <CreditCard />
                    Continue purchase
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Button variant="destructive">
                    <Trash />
                    Remove all
                  </Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ShoppingCartSidebar;
