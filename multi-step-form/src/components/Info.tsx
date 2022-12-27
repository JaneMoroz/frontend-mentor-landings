import React from "react";

// Styled components
import {
  PrimaryHeading,
  Paragraph,
  FormLink,
  Flex,
  FormContainer,
  FormButtons,
} from "../styles/globalStyles";
import { InfoGroup, InfoLabel, InfoInput } from "../styles/infoStyles";

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
        <InfoGroup>
          <InfoLabel htmlFor="name">Name</InfoLabel>
          <InfoInput
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            required
          />
        </InfoGroup>
        <InfoGroup>
          <InfoLabel htmlFor="name">Email address</InfoLabel>
          <InfoInput
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            required
          />
        </InfoGroup>
        <InfoGroup>
          <InfoLabel htmlFor="phone">Phone number</InfoLabel>
          <InfoInput
            type="text"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            required
          />
        </InfoGroup>
        <FormButtons>
          <Flex alignEnd justifyEnd>
            <FormLink to="/plan">next step</FormLink>
          </Flex>
        </FormButtons>
      </FormContainer>
    </>
  );
};

export default Info;
