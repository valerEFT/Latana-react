import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./components/slices/Auth";
import themeReducer from "./components/slices/theme";
import burgerReducer from "./components/slices/burgerIsOpen";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    theme: themeReducer,
    burger: burgerReducer,
  },
});
