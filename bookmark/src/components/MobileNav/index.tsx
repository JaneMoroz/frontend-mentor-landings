import type React from "react";
import { motion } from "framer-motion";

// Styles
import "./style.css";

// Header links
import links from "../../assets/links/navLinks";
import socialLinks from "../../assets/links/socialLinks";

// Logo
import { MobileLogo } from "../../assets/logo";

// Icons
import { CloseIcon } from "../../assets/icons/icons";

type MobileNavProps = {
  setNavIsOpen: (value: boolean) => void;
  navIsOpen: boolean;
};

const MobileNav: React.FC<MobileNavProps> = ({ setNavIsOpen, navIsOpen }) => {
  return (
    <motion.div
      initial={{ opacity: "0" }}
      animate={{ opacity: "100%" }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
      className="mobile"
    >
      <div className="mobile__inner">
        <motion.div
          initial={{ y: "-200px" }}
          animate={{ y: "0" }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          className="mobile__header"
        >
          <MobileLogo />
          <button
            aria-label="navigation toggle"
            className="header__mobile-btn btn btn--hamburger"
            type="button"
            onClick={() => setNavIsOpen(!navIsOpen)}
          >
            <CloseIcon />
          </button>
        </motion.div>
        <motion.nav
          initial={{ y: "100vh" }}
          animate={{ y: "0" }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="mobile__nav"
        >
          {links.map((link, index) => {
            return (
              <a className="link link--mobile" key={index} href={link!.href}>
                {link!.name}
              </a>
            );
          })}
        </motion.nav>
        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: "0" }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="mobile__btns"
        >
          <button className="btn btn--rect btn--mobile" type="button">
            Login
          </button>
        </motion.div>
        <motion.div
          initial={{ y: "100vh" }}
          animate={{ y: "0" }}
          transition={{
            delay: 1.5,
            duration: 0.8,
          }}
          className="mobile__social"
        >
          {socialLinks.map((link, index) => {
            return (
              <a
                aria-label={link.name}
                className="link"
                key={index}
                href={link.href}
              >
                {link.icon}
              </a>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MobileNav;
