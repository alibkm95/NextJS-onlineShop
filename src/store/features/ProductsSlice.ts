import { ProductType } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface ProductsState {
  products: null | ProductType[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: null,
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch(`/api/products`);
    const data = await res.json();
    if (res.status !== 200) {
      throw new Error(data.msg);
    }
    return data.products;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Getting products data error!";
      });
  },
});

export default productSlice.reducer;
