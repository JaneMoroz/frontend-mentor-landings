import React from "react";
import Feature from "./Feature";

// Styled components
import { FeaturesContainer, FeaturesList } from "../styles/featuresStyles";
import {
  SecondaryHeading,
  Paragraph,
  Flex,
  Container,
} from "../styles/globalStyles";

// Features data
const features = [
  {
    id: 0,
    title: "Track company-wide progress",
    text: "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: 1,
    title: "Advanced built-in reports",
    text: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: 2,
    title: "Everything you need in one place",
    text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

const Features = () => {
  return (
    <Container>
      <FeaturesContainer>
        <Flex column alignStart>
          <SecondaryHeading>What’s different about Manage?</SecondaryHeading>
          <Paragraph>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </Paragraph>
        </Flex>
        <FeaturesList>
          {features.map((feature) => (
            <Feature key={feature.id} feature={feature} />
          ))}
        </FeaturesList>
      </FeaturesContainer>
    </Container>
  );
};

export default Features;
