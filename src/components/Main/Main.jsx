import React from "react";
import BurgerNav from "../Main/BurgerNav";
import News from "./News";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <main className="main">
      <BurgerNav />
      <News />
      <Footer />
    </main>
  );
};

export default Main;
