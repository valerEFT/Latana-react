import React from "react";

function Logo() {
  return (
    <h1 className="header__logo">
      <a className="header__logo-link" href="/">
        <img src="images/logo.png" alt="Latana" className="header__logo-img" />
        <span className="header__logo-text">Latana</span>
      </a>
    </h1>
  );
}

export default Logo;
