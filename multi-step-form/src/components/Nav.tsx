import React from "react";

// Styled Components
import { NavLink } from "../styles/globalStyles";
import { NavContainer, NavLinks } from "../styles/navStyles";

// Links
const links = [
  { stepNum: 1, stepTitle: "your info", stepPath: "/" },
  { stepNum: 2, stepTitle: "select plan", stepPath: "/plan" },
  { stepNum: 3, stepTitle: "add-ons", stepPath: "/add_ons" },
  { stepNum: 4, stepTitle: "summary", stepPath: "/summary" },
];

const Nav = () => {
  return (
    <NavContainer>
      <NavLinks>
        {links.map((link) => (
          <NavLink to={link.stepPath} key={link.stepNum}>
            <span className="number">{link.stepNum}</span>
            <div className="title">
              <span>step {link.stepNum}</span>
              <span>{link.stepTitle}</span>
            </div>
          </NavLink>
        ))}
      </NavLinks>
    </NavContainer>
  );
};

export default Nav;
