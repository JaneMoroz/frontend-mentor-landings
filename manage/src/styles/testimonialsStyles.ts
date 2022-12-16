import styled from "styled-components";

export const TestimonialsContainer = styled.section`
  margin-bottom: 6.4rem;
  width: 100vw;
`;

export const TestimonialsList = styled.div`
  width: 100%;
  padding: 4.8rem 0;
  display: grid;
  grid-column-gap: 2.4rem;
  grid-auto-flow: column;
  overflow-y: hidden;
  overflow-x: scroll;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
`;

export const TestimonialListItem = styled.article`
  scroll-snap-align: center;
  position: relative;
  text-align: center;
  width: 55rem;
  padding: 6.4rem 0 0 0;
  background: ${(props) => props.theme.veryLightGray};

  img {
    position: absolute;
    width: 9rem;
    height: 9rem;
    top: 0;
    transform: translate(0, -50%);
  }
`;
