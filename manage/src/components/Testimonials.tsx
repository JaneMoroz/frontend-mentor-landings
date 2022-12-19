import React, { useState } from "react";
import Testimonial from "./Testimonial";

// Styled components
import {
  TestimonialsContainer,
  TestimonialsList,
  TestimonialsButtons,
} from "../styles/testimonialsStyles";
import {
  Button,
  Flex,
  SecondaryHeading,
  RoundButton,
} from "../styles/globalStyles";

// Testimonials data
import testimonials from "../assets/data/data";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Scrolling handler
  const handleScroll = (e: React.UIEvent<HTMLElement>): void => {
    const screenWidth = window.innerWidth;
    const scrollX = e.currentTarget.scrollLeft;

    if (scrollX < screenWidth) {
      setActiveIndex(0);
    } else if (scrollX < 2 * screenWidth) {
      setActiveIndex(1);
    } else if (scrollX < 3 * screenWidth) {
      setActiveIndex(2);
    } else if (scrollX < 4 * screenWidth) {
      setActiveIndex(3);
    }
  };

  return (
    <TestimonialsContainer>
      <Flex column>
        <SecondaryHeading>What they've said</SecondaryHeading>
        <TestimonialsList>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </TestimonialsList>
        <TestimonialsButtons>
          {testimonials.map((_, index) => (
            <RoundButton active={index === activeIndex} key={index} />
          ))}
        </TestimonialsButtons>
        <Button>Get Started</Button>
      </Flex>
    </TestimonialsContainer>
  );
};

export default Testimonials;
