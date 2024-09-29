import React from "react";
import { toggleBurger } from "../slices/burgerIsOpen";
import { useDispatch } from "react-redux";

function Burger() {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(toggleBurger())}
      className="header__burger-menu visible-mobile"
    ></div>
  );
}

export default Burger;
