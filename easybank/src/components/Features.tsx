import React from "react";

// Components
import Feature from "./Feature";

// Styled components
import { Container, SecondaryHeading, Paragraph } from "../styles/globalStyles";
import { FeaturesContainer, FeaturesList } from "../styles/featuresStyles";

// Icons
import {
  ApiIcon,
  BudgetIcon,
  OnBoardingIcon,
  OnlineIcon,
} from "../assets/icons/icons";

// Feature data
const features = [
  {
    icon: <OnlineIcon />,
    title: "Online Banking",
    text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: <BudgetIcon />,
    title: "Simple Budgeting",
    text: "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    icon: <OnBoardingIcon />,
    title: "Fast Onboarding",
    text: "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: <ApiIcon />,
    title: "Open API",
    text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

const Features = () => {
  return (
    <FeaturesContainer>
      <Container>
        <SecondaryHeading>Why choose Easybank?</SecondaryHeading>
        <Paragraph smallerWidth big>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </Paragraph>
        <FeaturesList>
          {features.map((feature, index) => (
            <Feature key={index} feature={feature} />
          ))}
        </FeaturesList>
      </Container>
    </FeaturesContainer>
  );
};

export default Features;
