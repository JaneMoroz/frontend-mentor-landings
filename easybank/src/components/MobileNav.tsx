import React from "react";
import ReactDOM from "react-dom";

// Header links
import headerLinks from "../assets/links/headerLinks";

// Styled components
import { Link } from "../styles/globalStyles";
import { Overlay, NavLinks } from "../styles/mobileNavStyles";

const MobileNav = () => {
  return ReactDOM.createPortal(
    <Overlay
      initial={{ opacity: "0" }}
      animate={{ opacity: "100%" }}
      transition={{ duration: 0.4, ease: [0.6, 0.05, -0.01, 0.9] }}
    >
      <NavLinks
        initial={{ y: "-200%" }}
        animate={{ y: "70px" }}
        transition={{
          delay: 0.4,
          duration: 0.4,
          ease: [0.6, 0.05, -0.01, 0.9],
        }}
      >
        {headerLinks.map((link, index) => (
          <Link mobile key={index} href={link.href}>
            {link.name}
          </Link>
        ))}
      </NavLinks>
    </Overlay>,
    document.getElementById("portal") as HTMLElement
  );
};

export default MobileNav;
