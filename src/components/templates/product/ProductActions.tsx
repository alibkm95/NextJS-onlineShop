"use client";
import { Button } from "@/components/ui/button";
import { addToCart, removeOne } from "@/store/features/ShoppingCartSlice";
import { AppDispatch, RootState } from "@/store/store";
import { ProductType } from "@/types";
import { Heart, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoBagAdd } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

interface ProductActionsProps {
  product: ProductType;
}

const ProductActions = ({ product }: ProductActionsProps) => {
  const [existingCartItem, setExistingCartItem] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  const { shoppingCart } = useSelector(
    (state: RootState) => state.shoppingCart
  );

  useEffect(() => {
    const cartItem = shoppingCart.find(
      (cartItem) => cartItem.product._id === product._id
    );
    setExistingCartItem(cartItem ? true : false);
  }, [shoppingCart]);

  const addToShoppingCart = () => {
    dispatch(addToCart(product));
    toast.success(product.name + " added to your shopping cart.");
  };
  
  const removeFromCart = () => {
    dispatch(removeOne(product._id));
    toast.success(product.name + " removed from shopping cart.");
  };

  return (
    <div className="flex items-center flex-row-reverse gap-2 flex-wrap">
      {existingCartItem ? (
        <Button
          variant={"destructive"}
          className="[&_svg]:size-6"
          onClick={removeFromCart}
        >
          <Trash2 />
          Remove from cart
        </Button>
      ) : (
        <Button
          className="bg-emerald-600 hover:bg-emerald-700 [&_svg]:size-6"
          onClick={addToShoppingCart}
        >
          <IoBagAdd />
          Add to cart
        </Button>
      )}

      <Button variant="outline" className="[&_svg]:size-6">
        <Heart className="text-primary fill-primary" />
        Add to Wishlist
      </Button>
    </div>
  );
};

export default ProductActions;
