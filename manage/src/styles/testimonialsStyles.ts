import styled from "styled-components";
import { motion } from "framer-motion";

export const TestimonialsContainer = styled.section`
  margin-bottom: 6.4rem;
  width: 100vw;
`;

export const TestimonialsList = styled(motion.div)`
  width: 100%;
  margin: 3.2rem 0;
  padding: 4.8rem 0 2rem 0;
  display: grid;
  grid-column-gap: 2.4rem;
  grid-auto-flow: column;
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export const TestimonialListItem = styled.article`
  scroll-snap-align: center;
  position: relative;
  text-align: center;
  width: 55rem;
  padding: 6.4rem 0 0 0;
  background: ${(props) => props.theme.veryLightGray};

  @media only screen and (max-width: 37.5em) {
    width: 100vw;
  }

  img {
    position: absolute;
    width: 9rem;
    height: 9rem;
    top: 0;
    transform: translate(0, -50%);
  }
`;

export const TestimonialsButtons = styled.div`
  display: none;
  column-gap: 1rem;
  margin-bottom: 3.2rem;

  @media only screen and (max-width: 37.5em) {
    display: flex;
  }
`;
