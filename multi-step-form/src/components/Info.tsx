import React, { FormEvent, useState, useEffect } from "react";
import { observer } from "mobx-react";
import { useStore } from "../context/context";
import { useNavigate } from "react-router-dom";

// Styled components
import {
  PrimaryHeading,
  Paragraph,
  FormLink,
  Flex,
  FormContainer,
  FormButtons,
} from "../styles/globalStyles";
import { InfoGroup, InfoLabel, InfoInput } from "../styles/infoStyles";

// Type
type InfoProps = {
  title: string;
  details: string;
};

const Info: React.FC<InfoProps> = observer(({ title, details }) => {
  const navigate = useNavigate();

  const { formInfo, addPersonalInfo } = useStore();
  const [user, setUser] = useState({
    name: formInfo.info.name,
    email: formInfo.info.email,
    phone: formInfo.info.phone,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate("/plan");
  };

  // Update store values
  useEffect(() => {
    addPersonalInfo(user);
  }, [user]);

  return (
    <>
      <PrimaryHeading>{title}</PrimaryHeading>
      <Paragraph>{details}</Paragraph>
      <FormContainer>
        <InfoGroup>
          <InfoLabel htmlFor="name">Name</InfoLabel>
          <InfoInput
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />
        </InfoGroup>
        <InfoGroup>
          <InfoLabel htmlFor="name">Email address</InfoLabel>
          <InfoInput
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />
        </InfoGroup>
        <InfoGroup>
          <InfoLabel htmlFor="phone">Phone number</InfoLabel>
          <InfoInput
            type="text"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
            required
          />
        </InfoGroup>
        <FormButtons>
          <Flex alignEnd justifyEnd>
            <FormLink type="submit" onClick={(e) => handleSubmit(e)}>
              next step
            </FormLink>
          </Flex>
        </FormButtons>
      </FormContainer>
    </>
  );
});

export default Info;
