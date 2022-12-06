import styled, { css } from "styled-components";

export const FeaturesContainer = styled.div`
  padding: 6.4rem 0;
  background: ${(props) => props.theme.lightGrayishBlue};
`;

export const FeaturesList = styled.ul`
  display: flex;
  align-items: flex-start;
  column-gap: 1.6rem;
  padding: 3.2rem 0;
`;

export const FeatureListItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`;
