import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import Burger from "./Burger";
import HeaderButtons from "./HeaderButtons";
import AuthButton from "./AuthButton";

function Header() {
  return (
    <header className="header container">
      <Logo />
      <Nav />
      <AuthButton />
      <Burger />
    </header>
  );
}

export default Header;
