import React from "react";
import { FooterLogo } from "../assets/logo";

// Styled components
import {
  FooterContainer,
  FooterNav,
  FooterSocial,
  SocialLinks,
  FooterNavLinks,
  FooterCTA,
  Copyrights,
} from "../styles/footerStyles";
import { Button, Container, Link } from "../styles/globalStyles";

// Footer links data
import footerLinks from "../assets/links/footerLinks";
import socialLinks from "../assets/links/socialLinks";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterNav>
          <FooterSocial>
            <FooterLogo />
            <SocialLinks>
              {socialLinks.map((link, index) => (
                <Link white aria-label={link.name} key={index} href={link.href}>
                  {link.icon}
                </Link>
              ))}
            </SocialLinks>
          </FooterSocial>
          <FooterNavLinks>
            {footerLinks.map((link, index) => (
              <Link white key={index} href={link.href}>
                {link.name}
              </Link>
            ))}
          </FooterNavLinks>
          <FooterCTA>
            <Button>Request invite</Button>
            <Copyrights>&copy; Easybank. All Rights Reserved</Copyrights>
          </FooterCTA>
        </FooterNav>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
