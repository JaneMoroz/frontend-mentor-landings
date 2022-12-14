import React from "react";
import ReactDOM from "react-dom";

// Header links
import headerLinks from "../assets/links/headerLinks";

// Styled components
import { Link } from "../styles/globalStyles";
import { Overlay, NavLinks } from "../styles/mobileNavStyles";

const MobileNav = () => {
  return ReactDOM.createPortal(
    <Overlay>
      <NavLinks>
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
