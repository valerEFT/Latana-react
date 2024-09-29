import React from "react";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="footer container">
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item footer__item-title">About</li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Lorem ipsum
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Lorem ipsum
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Lorem ipsum
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Lorem ipsum
            </a>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item footer__item-title">Policy</li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Lorem ipsum
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Lorem ipsum
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Lorem ipsum
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Lorem ipsum
            </a>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item footer__item-title">Contact</li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Lorem ipsum
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Lorem ipsum
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Lorem ipsum
            </a>
          </li>
          <li className="footer__item">
            <a href="/" className="footer__link">
              Lorem ipsum
            </a>
          </li>
        </ul>
        <form className="footer__form" onSubmit={handleSubmit}>
          <label className="footer__label">Come join us</label>
          <div className="footer__wrapper">
            <input
              type="email"
              placeholder="Enter email"
              className="footer__input"
              required
            />
            <button className="footer__button" type="submit">
              <img
                className="footer__button"
                src="/images/inputButton.png"
                alt="submitButton"
              />
            </button>
          </div>
          <div className="footer__media">
            <a href="/" className="footer__icon">
              <img src="/images/facebook.png"></img>
            </a>
            <a href="/" className="footer__icon">
              <img src="/images/inst.png"></img>
            </a>
            <a href="/" className="footer__icon">
              <img src="/images/twitter.png"></img>
            </a>
          </div>
        </form>
      </nav>
    </footer>
  );
};

export default Footer;
