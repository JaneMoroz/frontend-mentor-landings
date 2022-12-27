import React from "react";

// Styled Components
import {
  PrimaryHeading,
  Paragraph,
  Flex,
  TextLink,
  FormLink,
  FormContainer,
  FormTitle,
  FormButtons,
} from "../styles/globalStyles";

import {
  SummaryContainer,
  SummaryTotal,
  ChangePlanLink,
} from "../styles/summaryStyles";

// Type
type SummaryProps = {
  title: string;
  details: string;
};

const Summary: React.FC<SummaryProps> = ({ title, details }) => {
  return (
    <>
      <PrimaryHeading>{title}</PrimaryHeading>
      <Paragraph>{details}</Paragraph>
      <FormContainer>
        <SummaryContainer>
          <Flex spaceBetween>
            <div className="plan">
              <FormTitle>Arcade(Monthly)</FormTitle>
              <ChangePlanLink to="/plan">change</ChangePlanLink>
            </div>
            <FormTitle>$9/mo</FormTitle>
          </Flex>
          <ul className="addons">
            <li>
              <span>Online service</span>
              <span>+$1/mo</span>
            </li>
            <li>
              <span>Larger storage</span>
              <span>+$2/mo</span>
            </li>
          </ul>
        </SummaryContainer>
        <SummaryTotal>
          <span>Total (per month)</span>
          <span className="total">+$12/mo</span>
        </SummaryTotal>
        <FormButtons>
          <Flex alignEnd spaceBetween>
            <TextLink to="/add_ons">go back</TextLink>
            <FormLink to="/">confirm</FormLink>
          </Flex>
        </FormButtons>
      </FormContainer>
    </>
  );
};

export default Summary;
