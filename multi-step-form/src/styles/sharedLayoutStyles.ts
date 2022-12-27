import styled, { css } from "styled-components";

export const StepContainer = styled.div`
  display: flex;
`;

export const StepDetails = styled.section`
  padding: 5.6rem 10rem 3.2rem 10rem;
  min-width: 65rem;
  min-height: 60rem;

  @media only screen and (max-width: 56.25em) {
    padding: 3.2rem 2.4rem;
    min-width: 100%;
    min-height: 100%;
  }
`;
