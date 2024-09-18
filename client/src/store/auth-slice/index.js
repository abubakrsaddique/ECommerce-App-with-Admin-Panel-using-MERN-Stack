import { createSlice } from "@reduxjs/toolkit";
import { defaults } from "autoprefixer";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setuser: (state, action) => {},
  },
});

export const { setuser } = authSlice.actions;
export default authSlice.reducer;
