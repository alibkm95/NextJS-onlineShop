import { FilterOptionType } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  productName: string;
  category: "all" | "car" | "bike" | "scooter";
  sort: "a-z" | "z-a" | "newest" | "oldest" | "popular";
  onlyDiscounted: boolean;
}

const initialState: FilterState = {
  productName: "",
  category: "all",
  sort: "newest",
  onlyDiscounted: false,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    applyFilter: (state, action: PayloadAction<FilterOptionType>) => {
      if (action.payload.productName !== undefined) {
        state.productName = action.payload.productName.toLowerCase().trim();
      }
      if (action.payload.category !== undefined) {
        state.category = action.payload.category;
      }
      if (action.payload.sort !== undefined) {
        state.sort = action.payload.sort;
      }
      if (action.payload.onlyDiscounted !== undefined) {
        state.onlyDiscounted = action.payload.onlyDiscounted;
      }
    },
    resetFilter: () => initialState,
  },
});

export const { applyFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
