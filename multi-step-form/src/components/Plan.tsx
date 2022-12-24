import React from "react";

// Styled components
import {
  PrimaryHeading,
  Paragraph,
  Flex,
  FormLink,
  TextLink,
} from "../styles/globalStyles";

// Icons
import { ArcadeIcon, AdvancedIcon, ProIcon } from "../assets/icons/icons";
import {
  FormPlanButton,
  FormPlans,
  FormPlanType,
  FormSwitch,
} from "../styles/formStyles";

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
      <Flex column>
        <FormPlans>
          {plans.map((plan, index) => (
            <FormPlanButton key={index}>
              {plan.icon}
              <span className="plan-title">{plan.title}</span>
              <span className="plan-price">${plan.monthPrice}/mo</span>
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
        <Flex marginTop spaceBetween>
          <TextLink to="/">go back</TextLink>
          <FormLink to="/plan">next step</FormLink>
        </Flex>
      </Flex>
    </>
  );
};

export default Plan;
