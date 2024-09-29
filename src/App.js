import React from "react";
import "./scss/styles.scss";
import Routing from "./components/Routing/Routing";
import { useSelector } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";

function App() {
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const GlobalStyles = createGlobalStyle`

  body {
    color: ${({ theme }) => (theme.darkMode ? "#fff" : "#000")};
    background-color: ${({ theme }) => (theme.darkMode ? "#000" : "#fff")};
    transition: all 0.2s ease;

    --color-text: ${({ theme }) => (theme.darkMode ? "#fff" : "#000")}; 
    --background-color: ${({ theme }) => (theme.darkMode ? "#000" : "#fff")}; 
    --invert: ${({ theme }) => (theme.isDarkMode ? "invert(0)" : "invert(1)")}


   
  }
  // pagination 3 dots
  .css-1fmb3ot-MuiPaginationItem-root {
  color: ${({ theme }) => (theme.darkMode ? "#fff" : "#000")};
}
`;

  return (
    <ThemeProvider theme={{ darkMode }}>
      <GlobalStyles />
      <Routing />
    </ThemeProvider>
  );
}

export default App;
