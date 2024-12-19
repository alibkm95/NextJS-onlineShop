import { ShoppingCartType, ProductType } from "@/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface ShoppingCartState {
  shoppingCart: ShoppingCartType[];
}

const initialState: ShoppingCartState = {
  shoppingCart: JSON.parse(localStorage.getItem("shoppingCart") || "[]"),
};

const calculatePriceAmount: (
  priceAmount: number,
  offAmount: number
) => number = (priceAmount, offAmount) => {
  if (offAmount === 0) {
    return priceAmount;
  }
  const discountedPrice = priceAmount - (priceAmount * offAmount) / 100;
  return +(Math.ceil(discountedPrice * 100) / 100).toFixed(2);
};

const cartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    getAll: (state) => {
      state.shoppingCart = JSON.parse(
        localStorage.getItem("shoppingCart") || "[]"
      );
    },
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const product = action.payload;
      const existingItem = state.shoppingCart.find(
        (item) => item.product._id === product._id
      );
      if (!existingItem) {
        state.shoppingCart.push({
          product,
          quantity: 1,
        });
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify(state.shoppingCart)
        );
      }
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.shoppingCart.find(
        (item) => item.product._id === productId
      );

      if (existingItem) {
        existingItem.quantity += 1;
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify(state.shoppingCart)
        );
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.shoppingCart.find(
        (item) => item.product._id === productId
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        localStorage.setItem(
          "shoppingCart",
          JSON.stringify(state.shoppingCart)
        );
      }
    },
    removeAll: (state) => {
      state.shoppingCart = [];
      localStorage.removeItem("shoppingCart");
    },
    removeOne: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.shoppingCart = state.shoppingCart.filter(
        (cart) => cart.product._id !== productId
      );
      localStorage.setItem("shoppingCart", JSON.stringify(state.shoppingCart));
    },
  },
});

export const {
  getAll,
  addToCart,
  removeAll,
  removeOne,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
