import React from "react";

// Styled components
import {
  PrimaryHeading,
  Paragraph,
  Flex,
  FormLink,
  TextLink,
  FormContainer,
  FormTitle,
  FormDetails,
  FormButtons,
} from "../styles/globalStyles";

import {
  PlansContainer,
  PlanButton,
  PlanText,
  PlanType,
  DurationSwitch,
} from "../styles/planStyles";

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
        <PlansContainer>
          {plans.map((plan, index) => (
            <PlanButton key={index}>
              {plan.icon}
              <PlanText>
                <FormTitle>{plan.title}</FormTitle>
                <FormDetails>${plan.monthPrice}/mo</FormDetails>
              </PlanText>
            </PlanButton>
          ))}
        </PlansContainer>
        <PlanType>
          <DurationSwitch>
            <input id="monthly" type="radio" name="switch" defaultChecked />
            <input id="yearly" type="radio" name="switch" />
            <label htmlFor="monthly">Monthly</label>
            <label htmlFor="yearly">Yearly</label>
            <span className="slider"></span>
          </DurationSwitch>
        </PlanType>
        <FormButtons>
          <Flex alignEnd spaceBetween>
            <TextLink to="/">go back</TextLink>
            <FormLink to="/add_ons">next step</FormLink>
          </Flex>
        </FormButtons>
      </FormContainer>
    </>
  );
};

export default Plan;
