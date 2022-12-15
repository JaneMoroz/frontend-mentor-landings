import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;
  height: 55rem;
  width: 100%;
  background: ${(props) => props.theme.lightGray};

  &:before {
    content: "";
    position: absolute;
    top: -120px;
    height: 110%;
    width: 100vw;
    background-image: url("/images/bg-tablet-pattern.svg");
    background-repeat: no-repeat;
    background-size: 60%;
    background-position: 120% 100%;

    @media only screen and (max-width: 56.25em) {
      top: -50%;
      left: 20%;
      background-size: 100%;
    }
  }

  @media only screen and (max-width: 56.25em) {
    height: 100%;
  }
`;

export const HeroInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    row-gap: 4rem;
  }
`;

export const HeroText = styled.div`
  width: 50%;
  max-width: 450px;
  z-index: 1;

  @media only screen and (max-width: 56.25em) {
    text-align: center;
    order: 2;
    width: 100%;
    max-width: 100%;
    padding-bottom: 6.4rem;
  }
`;

export const HeroImage = styled.img`
  position: relative;
  flex: 3;
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media only screen and (max-width: 56.25em) {
    order: 1;
  }
`;
