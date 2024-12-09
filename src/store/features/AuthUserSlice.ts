import { UserType } from "@/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface AuthState {
  user: null | UserType;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authUser = createAsyncThunk("authUser/getMe", async () => {
  const res = await fetch(`/api/auth/me`);
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error(data.msg);
  }
  return data.user;
});

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(authUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Unauthorized!";
      });
  },
});

export default authUserSlice.reducer;
