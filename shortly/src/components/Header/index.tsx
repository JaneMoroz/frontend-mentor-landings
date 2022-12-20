import React, { useState, useEffect } from "react";

// Styles
import "./style.css";

// Icons
import { HamburgerIcon, CloseIcon } from "../../assets/icons/icons";

// Mobile Nav component
import MobileNav from "../MobileNav";

// Logo
import { NavLogo } from "../../assets/logo";

// Header links
import headerLinks from "../../assets/links/headerLinks";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  // Change scrolling behavior when navIsOpen changes
  useEffect(() => {
    if (navIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [navIsOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <NavLogo />
          </div>
          <nav className="header__nav">
            {headerLinks.map((link, index) => {
              return (
                <a className="link link--primary" key={index} href={link!.href}>
                  {link!.name}
                </a>
              );
            })}
          </nav>
          <div className="header__btns">
            <button className="btn btn--text" type="button">
              Login
            </button>
            <button className="btn btn--primary" type="button">
              Sign up
            </button>
          </div>
          <button
            aria-label="navigation toggle"
            className="btn btn--hamburger"
            type="button"
            onClick={() => setNavIsOpen(!navIsOpen)}
          >
            {navIsOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
          {navIsOpen && <MobileNav />}
        </div>
      </div>
    </header>
  );
};

export default Header;
