import React, { FormEvent, useState, useEffect } from "react";
import { useStore } from "../context/context";
import { useNavigate } from "react-router-dom";

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
  { icon: <ArcadeIcon />, title: "Arcade", price: 9 },
  {
    icon: <AdvancedIcon />,
    title: "Advanced",
    price: 12,
  },
  { icon: <ProIcon />, title: "Pro", price: 15 },
];

// Type
type PlanProps = {
  title: string;
  details: string;
};

const Plan: React.FC<PlanProps> = ({ title, details }) => {
  const navigate = useNavigate();

  const { formInfo, addPlan, addAddOns } = useStore();
  const [userPlan, setUserPlan] = useState({
    name: formInfo.plan.name,
    price: formInfo.plan.price,
    duration: formInfo.duration,
  });

  const changeDuration = (type: string) => {
    // Update plans prices
    setUserPlan({
      ...userPlan,
      price: type === "yr" ? userPlan.price * 10 : userPlan.price / 10,
      duration: type,
    });

    // Update addOns prices
    const updatedAddOns = formInfo.addOns.map((addOn) => {
      if (type === "yr") {
        return { ...addOn, price: addOn.price * 10 };
      } else {
        return { ...addOn, price: addOn.price / 10 };
      }
    });
    addAddOns(updatedAddOns);
  };

  const changePlan = (plan: { title: string; price: number }) => {
    setUserPlan({
      name: plan.title,
      price: userPlan.duration === "yr" ? plan.price * 10 : plan.price,
      duration: userPlan.duration,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/add_ons");
  };

  // Update store values
  useEffect(() => {
    addPlan(userPlan);
  }, [userPlan]);

  return (
    <>
      <PrimaryHeading>{title}</PrimaryHeading>
      <Paragraph>{details}</Paragraph>
      <FormContainer>
        <PlansContainer>
          {plans.map((plan, index) => (
            <PlanButton
              type="button"
              checked={userPlan.name === plan.title}
              key={index}
              onClick={() =>
                changePlan({
                  title: plan.title,
                  price: plan.price,
                })
              }
            >
              {plan.icon}
              <PlanText>
                <FormTitle>{plan.title}</FormTitle>
                <FormDetails>
                  {userPlan.duration === "yr"
                    ? `$${plan.price * 10}/yr`
                    : `$${plan.price}/mo`}
                </FormDetails>
              </PlanText>
            </PlanButton>
          ))}
        </PlansContainer>
        <PlanType>
          <DurationSwitch>
            <input
              id="monthly"
              type="radio"
              name="switch"
              checked={userPlan.duration === "mo"}
              onChange={() => changeDuration("mo")}
            />
            <input
              id="yearly"
              type="radio"
              name="switch"
              checked={userPlan.duration === "yr"}
              onChange={() => changeDuration("yr")}
            />
            <label htmlFor="monthly">Monthly</label>
            <label htmlFor="yearly">Yearly</label>
            <span className="slider"></span>
          </DurationSwitch>
        </PlanType>
        <FormButtons>
          <Flex alignEnd spaceBetween>
            <TextLink to="/">go back</TextLink>
            <FormLink type="submit" onClick={(e) => handleSubmit(e)}>
              next step
            </FormLink>
          </Flex>
        </FormButtons>
      </FormContainer>
    </>
  );
};

export default Plan;
