import { createSlice } from "@reduxjs/toolkit";

const burgerSlice = createSlice({
  name: "burger",
  initialState: { isOpen: false },
  reducers: {
    toggleBurger: (state) => {
      state.isOpen = !state.isOpen;
    },
    closeBurger: (state) => {
      state.isOpen = false;
    },
  },
});

export default burgerSlice.reducer;
export const { toggleBurger, closeBurger } = burgerSlice.actions;
