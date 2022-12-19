import styled from "styled-components";

export const FeaturesContainer = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 6.4rem;
  align-items: start;
  padding: 6.4rem 0;

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(1, 1fr);
    text-align: center;
  }

  &:before {
    content: "";
    position: absolute;
    top: 45%;
    left: -40%;
    height: 110%;
    width: 100vw;
    background-image: url("/images/bg-tablet-pattern.svg");
    background-repeat: no-repeat;
    background-size: 50%;

    @media only screen and (max-width: 56.25em) {
      display: none;
    }
  }
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
`;

export const FeatureListItem = styled.li`
  position: relative;
  display: grid;
  grid-template-columns: min-content 1fr;
  align-items: center;
  text-align: start;
  column-gap: 2rem;
  row-gap: 2.4rem;

  h3 {
    z-index: 999;
  }

  p {
    grid-column: 2;

    @media only screen and (max-width: 56.25em) {
      grid-column: 1 / span 2;
    }
  }

  @media only screen and (max-width: 56.25em) {
    &::before {
      content: "";
      top: 0;
      left: 0;
      height: 1.4rem;
      width: 100%;
      position: absolute;
      padding: 1.2rem 2.4rem;
      background: ${(props) => props.theme.veryPaleRed};
      border-radius: 3.2rem;
    }
  }
`;

export const FeatureNumber = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  padding: 1.2rem 2.4rem;
  background: ${(props) => props.theme.brightRed};
  color: ${(props) => props.theme.white};
  border-radius: 3.2rem;
  z-index: 999;
`;
