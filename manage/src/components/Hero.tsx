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
  HeroImage,
  HeroInner,
} from "../styles/heroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <Container>
        <HeroInner>
          <HeroText
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.8 }}
          >
            <PrimaryHeading>
              Bring everyone together to build better products.
            </PrimaryHeading>
            <Paragraph>
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </Paragraph>
            <Button>Get Started</Button>
          </HeroText>
          <HeroImage
            initial={{ x: "100%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
            src="/images/illustration-intro.svg"
            alt=""
          />
        </HeroInner>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
