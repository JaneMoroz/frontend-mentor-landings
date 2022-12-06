import React from "react";

// Styled Components
import { FeatureListItem } from "../styles/featuresStyles";
import { TertiaryHeading, Paragraph } from "../styles/globalStyles";

interface FeatureProp {
  feature: {
    icon: JSX.Element;
    title: string;
    text: string;
  };
}

const Feature: React.FC<FeatureProp> = ({ feature }) => {
  const { icon, title, text } = feature;
  return (
    <FeatureListItem>
      {icon}
      <TertiaryHeading>{title}</TertiaryHeading>
      <Paragraph medium>{text}</Paragraph>
    </FeatureListItem>
  );
};

export default Feature;
