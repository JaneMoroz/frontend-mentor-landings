import React, { ChangeEvent, useState } from "react";
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
  Form,
  InputGroup,
  Label,
  Input,
  ErrorMessage,
} from "../styles/footerStyles";
import { Button, Container, Link } from "../styles/globalStyles";

// Footer links data
import footerLinks from "../assets/links/footerLinks";
import socialLinks from "../assets/links/socialLinks";

const Footer = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  // Check if email is valid
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
    };

    if (!isValidEmail(target.email.value)) {
      setError("Please insert a valid email");
    } else {
      setError("");
      setEmail("");
    }
  };

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
            <Form onSubmit={(e) => handleSubmit(e)}>
              <InputGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="text"
                  placeholder="Updates in your inbox..."
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                />
                {error !== "" && <ErrorMessage>{error}</ErrorMessage>}
              </InputGroup>
              <Button type="submit">Go</Button>
            </Form>
            <Copyrights>
              &copy; Copyright {new Date().getFullYear()}. All Rights Reserved
            </Copyrights>
          </FooterCTA>
        </FooterNav>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
