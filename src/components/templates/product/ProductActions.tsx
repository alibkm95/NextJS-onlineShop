"use client";
import Spinner from "@/components/modules/Spinner";
import { Button } from "@/components/ui/button";
import { addToCart, removeOne } from "@/store/features/ShoppingCartSlice";
import {
  addToWishList,
  fetchWishes,
  removeFromWishList,
} from "@/store/features/WishesSlice";
import { AppDispatch, RootState } from "@/store/store";
import { ProductType, WishType } from "@/types";
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
  const [existingWishItem, setExistingWishItem] = useState<WishType | null>(
    null
  );
  const dispatch = useDispatch<AppDispatch>();
  const { shoppingCart } = useSelector(
    (state: RootState) => state.shoppingCart
  );
  const { wishes, loading, error } = useSelector(
    (state: RootState) => state.wishes
  );
  const { user } = useSelector((state: RootState) => state.authUser);

  useEffect(() => {
    if (!wishes) {
      dispatch(fetchWishes());
    }
  }, []);

  useEffect(() => {
    const cartItem = shoppingCart.find(
      (cartItem) => cartItem.product._id === product._id
    );
    setExistingCartItem(cartItem ? true : false);
  }, [shoppingCart]);

  useEffect(() => {
    if (wishes) {
      const wishItem = wishes.find((wish) => wish.product._id === product._id);
      setExistingWishItem(wishItem ?? null);
    }
  }, [wishes]);

  const addToShoppingCart = () => {
    dispatch(addToCart(product));
    toast.success(product.name + " added to your shopping cart.");
  };

  const removeFromCart = () => {
    dispatch(removeOne(product._id));
    toast.success(product.name + " removed from shopping cart.");
  };

  const addToWishes = async () => {
    if (!user) {
      return toast.error(
        "register or login with your account to add or remove product from your wishlist."
      );
    }
    await dispatch(addToWishList({ productId: product._id }));
    if (error) {
      toast.error(error);
    } else {
      toast.success(product.name + " added to wishlist.");
    }
  };

  const removeFromWishes = async (wishId: string) => {
    if (!user) {
      return toast.error(
        "register or login with your account to add or remove product from your wishlist."
      );
    }
    await dispatch(removeFromWishList({ wishId }));
    if (error) {
      toast.error(error);
    } else {
      toast.success(product.name + " removed from wishlist.");
    }
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
      {existingWishItem ? (
        <Button
          variant="outline"
          className="[&_svg]:size-6"
          onClick={() => removeFromWishes(existingWishItem._id)}
        >
          {loading ? (
            <Spinner />
          ) : (
            <Heart className="text-primary fill-primary" />
          )}
          Remove from Wishlist
        </Button>
      ) : (
        <Button
          variant="outline"
          className="[&_svg]:size-6"
          onClick={addToWishes}
        >
          {loading ? <Spinner /> : <Heart className="text-primary" />}
          Add to Wishlist
        </Button>
      )}
    </div>
  );
};

export default ProductActions;
