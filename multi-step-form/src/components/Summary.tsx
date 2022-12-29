import React, { useState, FormEvent } from "react";
import { useStore } from "../context/context";

// Icon
import { ThankYouIcon } from "../assets/icons/icons";

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
  const { formInfo } = useStore();
  const [allDone, setAllDone] = useState(false);

  const getTotal = () => {
    const addOnsTotal = formInfo.addOns.reduce(
      (acc, addOn) => acc + addOn.price,
      0
    );

    return formInfo.plan.price + addOnsTotal;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setAllDone(true);
  };

  if (allDone) {
    return (
      <Flex column center>
        <ThankYouIcon />
        <PrimaryHeading>Thank you!</PrimaryHeading>
        <Paragraph>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </Paragraph>
      </Flex>
    );
  }

  return (
    <>
      <PrimaryHeading>{title}</PrimaryHeading>
      <Paragraph>{details}</Paragraph>
      <FormContainer>
        <SummaryContainer>
          <Flex spaceBetween>
            <div className="plan">
              <FormTitle>
                {`${formInfo.plan.name}(${
                  formInfo.duration === "mo" ? "Monthly" : "Yearly"
                })`}
              </FormTitle>
              <ChangePlanLink to="/plan">change</ChangePlanLink>
            </div>
            <FormTitle>{`$${formInfo.plan.price}${
              formInfo.duration === "mo" ? "/mo" : "/yr"
            }`}</FormTitle>
          </Flex>
          <ul className="addons">
            {formInfo.addOns.map((addOn, index) => (
              <li key={index}>
                <span>{addOn.title}</span>
                <span>{`+$${addOn.price}${
                  formInfo.duration === "mo" ? "/mo" : "/yr"
                }`}</span>
              </li>
            ))}
          </ul>
        </SummaryContainer>
        <SummaryTotal>
          <span>Total (per month)</span>
          <span className="total">{`$${getTotal()}${
            formInfo.duration === "mo" ? "/mo" : "/yr"
          }`}</span>
        </SummaryTotal>
        <FormButtons>
          <Flex alignEnd spaceBetween>
            <TextLink to="/add_ons">go back</TextLink>
            <FormLink type="submit" onClick={(e) => handleSubmit(e)}>
              confirm
            </FormLink>
          </Flex>
        </FormButtons>
      </FormContainer>
    </>
  );
};

export default Summary;
