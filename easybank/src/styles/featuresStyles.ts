import styled, { css } from "styled-components";

export const FeaturesContainer = styled.section`
  padding: 6.4rem 0;
  background: ${(props) => props.theme.lightGrayishBlue};

  @media only screen and (max-width: 56.25em) {
    text-align: center;
  }
`;

export const FeaturesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  column-gap: 1.6rem;
  padding: 3.2rem 0;

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 37.5em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 3.2rem;
  }
`;

export const FeatureListItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;

  @media only screen and (max-width: 56.25em) {
    align-items: center;
  }
`;
