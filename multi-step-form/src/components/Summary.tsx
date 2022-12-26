import React from "react";

// Styled Components
import {
  PrimaryHeading,
  Paragraph,
  Flex,
  TextLink,
  FormLink,
  Title,
} from "../styles/globalStyles";
import {
  FormContainer,
  FormSummary,
  FormTotal,
  ChangePlanLink,
} from "../styles/formStyles";

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
        <FormSummary>
          <Flex spaceBetween>
            <div className="plan">
              <Title>Arcade(Monthly)</Title>
              <ChangePlanLink to="/plan">change</ChangePlanLink>
            </div>
            <Title>$9/mo</Title>
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
        </FormSummary>
        <FormTotal>
          <span>Total (per month)</span>
          <span className="total">+$12/mo</span>
        </FormTotal>
        <Flex alignEnd spaceBetween>
          <TextLink to="/add_ons">go back</TextLink>
          <FormLink to="/">confirm</FormLink>
        </Flex>
      </FormContainer>
    </>
  );
};

export default Summary;
