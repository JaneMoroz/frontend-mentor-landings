import React from "react";
import { useLocation } from "react-router-dom";

// Styled Components
import { NavListItem } from "../styles/globalStyles";
import { NavContainer, NavList } from "../styles/navStyles";

// Links
const links = [
  { stepNum: 1, stepTitle: "your info", stepPath: "/" },
  { stepNum: 2, stepTitle: "select plan", stepPath: "/plan" },
  { stepNum: 3, stepTitle: "add-ons", stepPath: "/add_ons" },
  { stepNum: 4, stepTitle: "summary", stepPath: "/summary" },
];

const Nav = () => {
  const location = useLocation();
  return (
    <NavContainer>
      <NavList>
        {links.map((link) => (
          <NavListItem
            active={location.pathname === link.stepPath}
            key={link.stepNum}
          >
            <span className="number">{link.stepNum}</span>
            <div className="title">
              <span>step {link.stepNum}</span>
              <span>{link.stepTitle}</span>
            </div>
          </NavListItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default Nav;
