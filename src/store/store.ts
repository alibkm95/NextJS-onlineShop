import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./features/AuthUserSlice";
import productReducer from "./features/ProductsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      authUser: authUserReducer,
      products: productReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
