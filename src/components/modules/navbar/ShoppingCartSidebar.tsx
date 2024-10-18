import { Button } from "@/components/ui/button";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
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

const ShoppingCartSidebar = () => {
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
              <SheetTitle>Cart</SheetTitle>
              <SheetDescription>Your shopping cart</SheetDescription>
            </SheetHeader>
            <Separator />
            <div className="flex-1 overflow-y-auto">
              <div className="flex flex-col gap-2 w-full">body</div>
            </div>
            <Separator />
            <SheetFooter className="w-full">
              <div className="w-full">footer</div>
            </SheetFooter>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ShoppingCartSidebar;
