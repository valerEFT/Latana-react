import React from "react";
import { useSelector } from "react-redux";
import DarkMode from "../DarkMode";

function Nav() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  return (
    <nav className="header__menu hidden-mobile">
      <ul className="header__list">
        <li className="header__item">
          <a
            className={`header__link ${isDarkMode ? "color-light" : "color-dark"}`}
            href="/"
          >
            Home
          </a>
        </li>
        <li className="header__item">
          <a
            className={`header__link ${isDarkMode ? "color-light" : "color-dark"}`}
            href="/"
          >
            Menu
          </a>
        </li>
        <li className="header__item">
          <a
            className={`header__link ${isDarkMode ? "color-light" : "color-dark"}`}
            href="/"
          >
            Blog
          </a>
        </li>
        <li className="header__item">
          <a
            className={`header__link ${isDarkMode ? "color-light" : "color-dark"}`}
            href="/"
          >
            Our story
          </a>
        </li>
        <li className="header__item header__item--dark-mode-position">
          <DarkMode />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
