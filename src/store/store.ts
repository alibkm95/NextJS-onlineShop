import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./features/AuthUserSlice";
import productReducer from "./features/ProductsSlice";
import shoppingCartReducer from "./features/ShoppingCartSlice";
import wishesReducer from "./features/WishesSlice";
import filterReducer from "./features/FilterProductsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      authUser: authUserReducer,
      products: productReducer,
      shoppingCart: shoppingCartReducer,
      wishes: wishesReducer,
      filter: filterReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
