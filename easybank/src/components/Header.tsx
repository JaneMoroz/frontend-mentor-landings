import React, { useState } from "react";
import MobileNav from "./MobileNav";

// Logo
import { NavLogo } from "../assets/logo";

// Header links
import headerLinks from "../assets/links/headerLinks";

// Styled components
import { Button, Container, Flex, Link } from "../styles/globalStyles";
import { HeaderNav, NavLinks, Hamburger } from "../styles/headerStyles";

// Hamburger icons
import { HamburgerIcon, CloseIcon } from "../assets/icons/icons";

const Header = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween>
          <NavLogo />
          <NavLinks>
            {headerLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.name}
              </Link>
            ))}
          </NavLinks>
          <Button>Request Invite</Button>
          <Hamburger
            aria-label="navigation toggle"
            onClick={() => setNavIsOpen(!navIsOpen)}
          >
            {navIsOpen ? <CloseIcon /> : <HamburgerIcon />}
          </Hamburger>
          {navIsOpen && <MobileNav />}
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
