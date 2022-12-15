import React from "react";

// Styled components
import { FeatureListItem, FeatureNumber } from "../styles/featuresStyles";
import { Paragraph, TertiaryHeading } from "../styles/globalStyles";

interface FeatureProp {
  feature: {
    id: number;
    title: string;
    text: string;
  };
}

const Feature: React.FC<FeatureProp> = ({ feature }) => {
  return (
    <FeatureListItem>
      <FeatureNumber>0{feature.id + 1}</FeatureNumber>
      <TertiaryHeading>{feature.title}</TertiaryHeading>
      <Paragraph fullWidth>{feature.text}</Paragraph>
    </FeatureListItem>
  );
};

export default Feature;
