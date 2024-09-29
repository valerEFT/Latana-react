import { enableDarkMode, disableDarkMode } from "./slices/theme";
import { useSelector, useDispatch } from "react-redux";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React from "react";

const DarkMode = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <button
      className="header__dark-mode"
      onClick={() => dispatch(darkMode ? disableDarkMode() : enableDarkMode())}
    >
      {darkMode ? "Light" : "Dark"}
      {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
    </button>
  );
};

export default DarkMode;
