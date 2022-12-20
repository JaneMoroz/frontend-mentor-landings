import React from "react";

// Styles
import "./style.css";

// Header links
import headerLinks from "../../assets/links/headerLinks";

const MobileNav = () => {
  return (
    <div className="mobile">
      <div className="mobile__inner">
        <nav className="mobile__nav">
          {headerLinks.map((link, index) => {
            return (
              <a className="link link--big" key={index} href={link!.href}>
                {link!.name}
              </a>
            );
          })}
        </nav>
        <div className="mobile__btns">
          <button className="btn btn--text btn--big" type="button">
            Login
          </button>
          <button className="btn btn--primary btn--big" type="button">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
