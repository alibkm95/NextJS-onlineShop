import { WishType } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface WishesState {
  wishes: null | WishType[];
  loading: boolean;
  error: null | string;
}

const initialState: WishesState = {
  wishes: null,
  loading: false,
  error: null,
};

export const fetchWishes = createAsyncThunk<WishType[]>(
  "wishes/fetchWishes",
  async () => {
    const res = await fetch("/api/user/wishes");
    if (res.status !== 200) {
      throw new Error("Failed to fetch wishes");
    }
    const data = await res.json();
    return data.wishes;
  }
);

export const addToWishList = createAsyncThunk<WishType, { productId: string }>(
  "wishes/addToWishList",
  async ({ productId }) => {
    const res = await fetch("/api/user/wishes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ productId }),
    });
    if (res.status !== 201) {
      throw new Error("Failed to add to wishlist");
    }
    const data = await res.json();
    return data.wish;
  }
);

export const removeFromWishList = createAsyncThunk<string, { wishId: string }>(
  "wishes/removeFromWishList",
  async ({ wishId }) => {
    const res = await fetch(`/api/user/wishes/${wishId}`, {
      method: "DELETE",
    });
    if (res.status !== 200) {
      throw new Error("Failed to remove from wishlist");
    }
    const data = await res.json();
    return data.removedWishItem;
  }
);

const wishesSlice = createSlice({
  name: "wishes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWishes.fulfilled, (state, action) => {
        state.loading = false;
        state.wishes = action.payload;
      })
      .addCase(fetchWishes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Getting wishlist data error!";
      })
      .addCase(addToWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToWishList.fulfilled, (state, action) => {
        state.loading = false;
        if (state.wishes) {
          state.wishes.push(action.payload);
        } else {
          state.wishes = [action.payload];
        }
      })
      .addCase(addToWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Adding to wishlist failed!";
      })
      .addCase(removeFromWishList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromWishList.fulfilled, (state, action) => {
        state.loading = false;
        if (state.wishes) {
          state.wishes = state.wishes.filter(
            (wishItem) => wishItem._id !== action.payload
          );
        }
      })
      .addCase(removeFromWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Removing from wishlist failed!";
      });
  },
});

export default wishesSlice.reducer;
