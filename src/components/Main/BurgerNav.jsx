import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import { closeBurger } from "../slices/burgerIsOpen";
import DarkMode from "../DarkMode";

const BurgerNav = () => {
  const isOpen = useSelector((state) => state.burger.isOpen);

  const dispatch = useDispatch();
  return (
    <nav
      className={`header__menu ${isOpen ? "header__menu-open" : "header__menu-close"} burger__container container`}
    >
      <ul className="header__list">
        <li className="header__item">
          <a className="header__link color-light" href="/">
            Home
          </a>
        </li>
        <li className="header__item">
          <a className="header__link color-light" href="/">
            Menu
          </a>
        </li>
        <li className="header__item">
          <a className="header__link color-light" href="/">
            Blog
          </a>
        </li>
        <li className="header__item">
          <a className="header__link color-light" href="/">
            Our story
          </a>
        </li>
        <li className="header__item">
          <DarkMode />
        </li>
      </ul>
      <button onClick={() => dispatch(closeBurger())} className="burger__close">
        <CloseIcon />
      </button>
    </nav>
  );
};

export default BurgerNav;
