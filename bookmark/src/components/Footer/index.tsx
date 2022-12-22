import React from "react";

// Styles
import "./style.css";

// Logo
import { FooterLogo } from "../../assets/logo";

// Links
import links from "../../assets/links/navLinks";
import socialLinks from "../../assets/links/socialLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__logo">
            <FooterLogo />
          </div>
          <nav className="footer__nav">
            {links.map((link, index) => {
              return (
                <a
                  className="link link--secondary"
                  key={index}
                  href={link!.href}
                >
                  {link!.name}
                </a>
              );
            })}
          </nav>
          <div className="footer__social">
            {socialLinks.map((link, index) => {
              return (
                <a
                  aria-label={link!.name}
                  className="link link--secondary"
                  key={index}
                  href={link.href}
                >
                  {link!.icon}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
