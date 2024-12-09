import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./features/AuthUserSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      authUser: authUserReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
