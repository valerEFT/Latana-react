import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    isLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    isLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});
export const { isLoggedIn, isLoggedOut } = authSlice.actions;
export default authSlice.reducer;
