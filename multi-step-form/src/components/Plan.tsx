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

import {
  FormContainer,
  FormPlanButton,
  FormPlans,
  FormPlanType,
  FormSwitch,
} from "../styles/formStyles";

// Icons
import { ArcadeIcon, AdvancedIcon, ProIcon } from "../assets/icons/icons";

// Plans
const plans = [
  { icon: <ArcadeIcon />, title: "Arcade", monthPrice: 9, yearPrice: 90 },
  { icon: <AdvancedIcon />, title: "Advanced", monthPrice: 12, yearPrice: 120 },
  { icon: <ProIcon />, title: "Pro", monthPrice: 15, yearPrice: 150 },
];

// Type
type PlanProps = {
  title: string;
  details: string;
};

const Plan: React.FC<PlanProps> = ({ title, details }) => {
  return (
    <>
      <PrimaryHeading>{title}</PrimaryHeading>
      <Paragraph>{details}</Paragraph>
      <FormContainer>
        <FormPlans>
          {plans.map((plan, index) => (
            <FormPlanButton key={index}>
              {plan.icon}
              <Title>{plan.title}</Title>
              <Details>${plan.monthPrice}/mo</Details>
            </FormPlanButton>
          ))}
        </FormPlans>
        <FormPlanType>
          <FormSwitch>
            <input id="monthly" type="radio" name="switch" defaultChecked />
            <input id="yearly" type="radio" name="switch" />
            <label htmlFor="monthly">Monthly</label>
            <label htmlFor="yearly">Yearly</label>
            <span className="slider"></span>
          </FormSwitch>
        </FormPlanType>
        <Flex alignEnd spaceBetween>
          <TextLink to="/">go back</TextLink>
          <FormLink to="/add_ons">next step</FormLink>
        </Flex>
      </FormContainer>
    </>
  );
};

export default Plan;
