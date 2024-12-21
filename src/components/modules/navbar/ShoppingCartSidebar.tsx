"use client";
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
import React, { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ProductCardSM from "../itemBox/ProductCardSM";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import {
  getAll,
  removeAll,
  removeOne,
} from "@/store/features/ShoppingCartSlice";

const ShoppingCartSidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { shoppingCart } = useSelector(
    (state: RootState) => state.shoppingCart
  );

  useEffect(() => {
    dispatch(getAll());
  }, []);

  const removeItemFromCart = (productId: string) => {
    dispatch(removeOne(productId));
  };

  const removeAllItems = () => {
    dispatch(removeAll());
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:[&_svg]:size-6 relative">
            {shoppingCart.length > 0 && (
              <div className="absolute top-1 right-2 w-2 h-2 rounded-full bg-primary" />
            )}
            <ShoppingCartIcon />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col h-full gap-3">
            <SheetHeader>
              <SheetTitle>Shopping Cart</SheetTitle>
              <SheetDescription>
                {shoppingCart.length} product(s) in your shopping cart
              </SheetDescription>
            </SheetHeader>
            <Separator />
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col gap-2 w-full">
                {shoppingCart.length === 0 ? (
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
                    {shoppingCart.map((cartItem) => (
                      <ProductCardSM
                        btnAction={() => {
                          removeItemFromCart(cartItem.product._id);
                        }}
                        product={cartItem.product}
                        useCloser={true}
                        key={cartItem.product._id}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <Separator />
            {shoppingCart.length > 0 && (
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
                    <Button variant="destructive" onClick={removeAllItems}>
                      <Trash />
                      Remove all
                    </Button>
                  </SheetClose>
                </div>
              </SheetFooter>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ShoppingCartSidebar;
