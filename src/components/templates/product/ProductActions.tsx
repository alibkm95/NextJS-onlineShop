"use client";
import { Button } from "@/components/ui/button";
import { AppDispatch, RootState } from "@/store/store";
import { Heart } from "lucide-react";
import React from "react";
import { IoBagAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

interface ProductActionsProps {
  productId: string;
}

const ProductActions = ({ productId }: ProductActionsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const shoppingCart = useSelector(
    (state: RootState) => state.shoppingCart.shoppingCart
  );
  const addToCart = () => {};
  const removeFromCart = () => {};

  return (
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
  );
};

export default ProductActions;
