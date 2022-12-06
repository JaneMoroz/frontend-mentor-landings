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
  HeroImage,
} from "../styles/heroStyles";

// Images
import { DesktopBg } from "../assets/backgrounds/backgrounds";
import imageMockups from "../assets/images/imageMockups.png";

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroText>
          <PrimaryHeading>Next generation digital banking</PrimaryHeading>
          <Paragraph big>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </Paragraph>
        </HeroText>
        <HeroBackground>
          <DesktopBg />
        </HeroBackground>
        <HeroImage src={imageMockups} alt=""></HeroImage>
        <Button>Request invite</Button>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
