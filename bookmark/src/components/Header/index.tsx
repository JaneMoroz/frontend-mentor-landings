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
import links from "../../assets/links/navLinks";

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
            {links.map((link, index) => {
              return (
                <a className="link link--primary" key={index} href={link!.href}>
                  {link!.name}
                </a>
              );
            })}
          </nav>
          <div className="header__btns">
            <button className="btn btn--rect btn--primary" type="button">
              Login
            </button>
          </div>
          {!navIsOpen && (
            <button
              aria-label="navigation toggle"
              className="header__mobile-btn btn btn--hamburger"
              type="button"
              onClick={() => setNavIsOpen(!navIsOpen)}
            >
              <HamburgerIcon />
            </button>
          )}
          {navIsOpen && (
            <MobileNav setNavIsOpen={setNavIsOpen} navIsOpen={navIsOpen} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
