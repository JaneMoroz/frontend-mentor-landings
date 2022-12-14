import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled.section`
  position: relative;
  height: 55rem;
  width: 100%;
  background: ${(props) => props.theme.lightGray};
  margin: 5.6rem 0;

  @media only screen and (max-width: 56.25em) {
    margin: 0;
  }

  &:before {
    content: "";
    position: absolute;
    top: -180px;
    height: 110%;
    width: 100vw;
    background-image: url("/images/bg-tablet-pattern.svg");
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: 200% 100%;

    @media only screen and (max-width: 56.25em) {
      background-size: 100%;
      left: 15%;
      background-position: 0% -15%;
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
  column-gap: 3.2rem;

  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    row-gap: 4rem;
  }
`;

export const HeroText = styled(motion.div)`
  z-index: 1;

  @media only screen and (max-width: 56.25em) {
    text-align: center;
    order: 2;
    width: 100%;
    max-width: 100%;
    padding-bottom: 6.4rem;
  }
`;

export const HeroImage = styled(motion.img)`
  position: relative;
  height: 100%;
  width: 100%;
  object-fit: cover;

  @media only screen and (max-width: 56.25em) {
    order: 1;
  }
`;
