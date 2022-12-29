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

// Icons
import { AddOnsCheck } from "../styles/addOnsStyles";

// Plans
const addOns = [
  {
    name: "service",
    title: "Online service",
    details: "Access to multiplayer games",
    price: 1,
  },
  {
    name: "storage",
    title: "Larger storage",
    details: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    name: "profile",
    title: "Customizable Profile",
    details: "Custom theme on your profile",
    price: 2,
  },
];

// Type
type AddOnsProps = {
  title: string;
  details: string;
};

const AddOns: React.FC<AddOnsProps> = ({ title, details }) => {
  const navigate = useNavigate();

  const { formInfo, addAddOns } = useStore();
  const [userAddOns, setUserAddOns] = useState(formInfo.addOns);

  const checkAddOn = (addOn: {
    name: string;
    title: string;
    price: number;
  }) => {
    // Check if it is already in the array
    const index = userAddOns.findIndex(
      (userAddOn) => userAddOn.name === addOn.name
    );

    // Delete from the array
    if (index !== -1) {
      setUserAddOns(
        userAddOns.filter((userAddOn) => userAddOn.name !== addOn.name)
      );
      // Add to the array
    } else {
      setUserAddOns([
        ...userAddOns,
        {
          name: addOn.name,
          title: addOn.title,
          price: formInfo.duration === "yr" ? addOn.price * 10 : addOn.price,
        },
      ]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addAddOns(userAddOns);
    navigate("/summary");
  };

  return (
    <>
      <PrimaryHeading>{title}</PrimaryHeading>
      <Paragraph>{details}</Paragraph>
      <FormContainer>
        {addOns.map((addOn, index) => (
          <AddOnsCheck
            checked={
              userAddOns.findIndex(
                (userAddOn) => userAddOn.name === addOn.name
              ) !== -1
            }
            key={index}
            htmlFor={addOn.name}
          >
            <input
              defaultChecked={
                userAddOns.findIndex(
                  (userAddOn) => userAddOn.name === addOn.name
                ) !== -1
              }
              type="checkbox"
              id={addOn.name}
              name={addOn.name}
              onChange={() =>
                checkAddOn({
                  name: addOn.name,
                  title: addOn.title,
                  price: addOn.price,
                })
              }
            />
            <span className="checkmark"></span>
            <Flex column>
              <FormTitle>{addOn.title}</FormTitle>
              <FormDetails>{addOn.details}</FormDetails>
            </Flex>
            <span className="price">
              {formInfo.duration === "yr"
                ? `+$${addOn.price * 10}/yr`
                : `+$${addOn.price}/mo`}
            </span>
          </AddOnsCheck>
        ))}
        <FormButtons>
          <Flex alignEnd spaceBetween>
            <TextLink to="/plan">go back</TextLink>
            <FormLink type="submit" onClick={(e) => handleSubmit(e)}>
              next step
            </FormLink>
          </Flex>
        </FormButtons>
      </FormContainer>
    </>
  );
};

export default AddOns;
