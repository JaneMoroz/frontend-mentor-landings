import React from "react";

// Logo
import { NavLogo } from "../assets/logo";
import headerLinks from "../assets/links/headerLinks";

// Styled components
import { Button, Container, Flex, Link } from "../styles/globalStyles";
import { HeaderNav, NavLinks } from "../styles/headerStyles";

const Header = () => {
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
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
