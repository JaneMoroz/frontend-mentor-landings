import styled from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  height: 55rem;
  width: 100%;
  background: ${(props) => props.theme.lightGray};

  @media only screen and (max-width: 56.25em) {
    height: 70rem;
  }
`;

export const HeroInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }
`;

export const HeroText = styled.div`
  width: 50%;
  max-width: 450px;

  @media only screen and (max-width: 56.25em) {
    text-align: center;
    order: 2;
    width: 100%;
    max-width: 100%;
    padding-bottom: 6.4rem;
  }
`;

export const HeroBackground = styled.div`
  position: relative;
  flex: 3;
  height: 100%;
  width: 100vw;

  &:before {
    content: "";
    position: absolute;
    height: 100%;
    background-image: url("/images/bg-intro-desktop.svg");
    background-repeat: no-repeat;
    width: 100vw;
    background-size: 70%;
    background-position: 0% 100%;

    @media only screen and (max-width: 56.25em) {
      width: 180vw;
      left: -22%;
      background-size: 100%;
      background-position: 0% 100%;
    }
  }

  &:after {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    background-size: 85%;
    background-image: url("/images/imageMockups.png");
    background-repeat: no-repeat;
    background-position: center 100%;
    left: 15%;

    @media only screen and (max-width: 56.25em) {
      width: 100%;
      background-size: 70%;
      background-position: center 100%;
      top: -25%;
      left: 0;
    }

    @media only screen and (max-width: 37.5em) {
      background-size: 100%;
    }
  }

  @media only screen and (max-width: 56.25em) {
    order: 1;
  }
`;
