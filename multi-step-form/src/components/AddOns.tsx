import React from "react";

// Styled components
import {
  PrimaryHeading,
  Paragraph,
  Flex,
  FormLink,
  TextLink,
  Title,
  Details,
} from "../styles/globalStyles";

// Icons
import { FormAddOnsCheck, FormContainer } from "../styles/formStyles";

// Plans
const addOns = [
  {
    name: "service",
    title: "Online service",
    details: "Access to multiplayer games",
    monthPrice: 1,
    yearPrice: 10,
  },
  {
    name: "storage",
    title: "Larger storage",
    details: "Extra 1TB of cloud save",
    monthPrice: 2,
    yearPrice: 20,
  },
  {
    name: "profile",
    title: "Customizable Profile",
    details: "Custom theme on your profile",
    monthPrice: 2,
    yearPrice: 20,
  },
];

// Type
type AddOnsProps = {
  title: string;
  details: string;
};

const AddOns: React.FC<AddOnsProps> = ({ title, details }) => {
  return (
    <>
      <PrimaryHeading>{title}</PrimaryHeading>
      <Paragraph>{details}</Paragraph>
      <FormContainer>
        {addOns.map((addOn, index) => (
          <FormAddOnsCheck checked key={index} htmlFor={addOn.name}>
            <input type="checkbox" id={addOn.name} name={addOn.name} />
            <span className="checkmark"></span>
            <Flex column>
              <Title>{addOn.title}</Title>
              <Details>{addOn.details}</Details>
            </Flex>
            <span className="price">+${addOn.monthPrice}/mo</span>
          </FormAddOnsCheck>
        ))}
        <Flex alignEnd spaceBetween>
          <TextLink to="/plan">go back</TextLink>
          <FormLink to="/summary">next step</FormLink>
        </Flex>
      </FormContainer>
    </>
  );
};

export default AddOns;
