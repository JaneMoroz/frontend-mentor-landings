import React from "react";

// Styled components
import {
  PrimaryHeading,
  Paragraph,
  FormLink,
  Flex,
} from "../styles/globalStyles";
import {
  FormGroup,
  FormLabel,
  FormInput,
  FormContainer,
} from "../styles/formStyles";

// Type
type InfoProps = {
  title: string;
  details: string;
};

const Info: React.FC<InfoProps> = ({ title, details }) => {
  return (
    <>
      <PrimaryHeading>{title}</PrimaryHeading>
      <Paragraph>{details}</Paragraph>
      <FormContainer>
        <FormGroup>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="name">Email address</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            required
          />
        </FormGroup>
        <FormGroup>
          <FormLabel htmlFor="phone">Phone number</FormLabel>
          <FormInput
            type="text"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            required
          />
        </FormGroup>
        <Flex alignEnd justifyEnd>
          <FormLink to="/plan">next step</FormLink>
        </Flex>
      </FormContainer>
    </>
  );
};

export default Info;
