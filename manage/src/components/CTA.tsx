import React from "react";

// Styled components
import { CTAContainer } from "../styles/ctaStyles";
import {
  Button,
  Container,
  Flex,
  SecondaryHeading,
} from "../styles/globalStyles";

const CTA = () => {
  return (
    <CTAContainer>
      <Container>
        <Flex cta>
          <SecondaryHeading cta>
            Simplify how your team works today.
          </SecondaryHeading>
          <Button cta>Get Started</Button>
        </Flex>
      </Container>
    </CTAContainer>
  );
};

export default CTA;
