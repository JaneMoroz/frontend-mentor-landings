import React from "react";

// Styled components
import {
  Button,
  Container,
  PrimaryHeading,
  Paragraph,
} from "../styles/globalStyles";
import {
  HeroContainer,
  HeroText,
  HeroBackground,
  HeroInner,
} from "../styles/heroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroInner>
          <HeroText>
            <PrimaryHeading>Next generation digital banking</PrimaryHeading>
            <Paragraph big>
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </Paragraph>
            <Button>Request invite</Button>
          </HeroText>
          <HeroBackground />
        </HeroInner>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
