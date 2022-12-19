import styled from "styled-components";

export const CTAContainer = styled.section`
  position: relative;
  padding: 6.4rem 0;
  background: ${(props) => props.theme.brightRed};
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: -20px;
    left: 0;
    height: 110%;
    width: 100vw;
    background-image: url("/images/bg-tablet-pattern.svg");
    background-repeat: no-repeat;
    background-size: 50%;
    opacity: 7%;

    @media only screen and (max-width: 56.25em) {
      left: -60%;
      background-size: 100%;
    }
  }

  &:after {
    content: "";
    position: absolute;
    top: -20px;
    left: 50%;
    height: 110%;
    width: 100vw;
    background-image: url("/images/bg-tablet-pattern.svg");
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: 60% 120%;
    opacity: 7%;

    @media only screen and (max-width: 56.25em) {
      display: none;
    }
  }
`;
