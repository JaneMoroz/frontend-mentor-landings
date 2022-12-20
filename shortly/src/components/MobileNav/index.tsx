import React from "react";
import { motion } from "framer-motion";

// Styles
import "./style.css";

// Header links
import headerLinks from "../../assets/links/headerLinks";

const MobileNav = () => {
  return (
    <div className="mobile">
      <motion.div
        initial={{ y: "-200%" }}
        animate={{ y: "0" }}
        transition={{
          delay: 0.4,
          duration: 0.4,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
        className="mobile__inner"
      >
        <nav className="mobile__nav">
          {headerLinks.map((link, index) => {
            return (
              <a className="link link--medium" key={index} href={link!.href}>
                {link!.name}
              </a>
            );
          })}
        </nav>
        <div className="mobile__btns">
          <button className="btn btn--text btn--medium" type="button">
            Login
          </button>
          <button className="btn btn--primary btn--medium" type="button">
            Sign up
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileNav;
