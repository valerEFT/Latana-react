import { useSelector, useDispatch } from "react-redux";
import { isLoggedIn, isLoggedOut } from "../slices/Auth";
import React from "react";

const AuthButton = () => {
  const dispatch = useDispatch();
  const authButton = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
      <button
        className="header__button hidden-mobile"
        onClick={() => dispatch(authButton ? isLoggedOut() : isLoggedIn())}
      >
        {authButton ? "Log out" : "Log in"}
      </button>
    </>
  );
};

export default AuthButton;
