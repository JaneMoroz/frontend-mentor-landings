import React from "react";

// Styled components
import { PrimaryHeading, Paragraph } from "../styles/globalStyles";
import { StepContainer, StepDetails } from "../styles/stepStyles";

// Components
import Nav from "./Nav";
import Form from "./Form";

const Step = () => {
  return (
    <StepContainer>
      <Nav />
      <StepDetails>
        <PrimaryHeading>Personal info</PrimaryHeading>
        <Paragraph>
          Please provide your name, email address, and phone number.
        </Paragraph>
        <Form />
      </StepDetails>
    </StepContainer>
  );
};

export default Step;
