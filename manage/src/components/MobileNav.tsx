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
      transition={{ duration: 0.2 }}
    >
      <NavLinks
        initial={{ y: "-200%" }}
        animate={{ y: "0" }}
        transition={{
          delay: 0.2,
          duration: 0.4,
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
