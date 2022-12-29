import React from "react";
import { useLocation } from "react-router-dom";

// Styled components
import { MobileNavContainer } from "../styles/mobileNavStyles";
import { NavList } from "../styles/navStyles";
import { NavListItem } from "../styles/globalStyles";

// Links
// TODO: move to assets or utils
const links = [
  { stepNum: 1, stepTitle: "your info", stepPath: "/" },
  { stepNum: 2, stepTitle: "select plan", stepPath: "/plan" },
  { stepNum: 3, stepTitle: "add-ons", stepPath: "/add_ons" },
  { stepNum: 4, stepTitle: "summary", stepPath: "/summary" },
];

const MobileNav = () => {
  const location = useLocation();
  return (
    <MobileNavContainer>
      <NavList>
        {links.map((link) => (
          <NavListItem
            active={location.pathname === link.stepPath}
            key={link.stepNum}
          >
            <span className="number">{link.stepNum}</span>
          </NavListItem>
        ))}
      </NavList>
    </MobileNavContainer>
  );
};

export default MobileNav;
