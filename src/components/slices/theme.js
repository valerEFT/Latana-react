import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { isDarkMode: false },
  reducers: {
    enableDarkMode: (state) => {
      state.isDarkMode = true;
    },
    disableDarkMode: (state) => {
      state.isDarkMode = false;
    },
  },
});

export default themeSlice.reducer;
export const { enableDarkMode, disableDarkMode } = themeSlice.actions;
