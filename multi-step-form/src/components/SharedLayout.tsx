import React from "react";
import { Outlet } from "react-router-dom";

// Styled components
import { StepContainer, StepDetails } from "../styles/sharedLayoutStyles";

// Components
import Nav from "./Nav";

// Type
type SharedLayoutProps = {
  children?: React.ReactNode;
};

const SharedLayout = ({ children }: SharedLayoutProps) => {
  return (
    <StepContainer>
      <Nav />
      <StepDetails>
        <Outlet />
      </StepDetails>
    </StepContainer>
  );
};

export default SharedLayout;
