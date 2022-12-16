import React from "react";
import Testimonial from "./Testimonial";

// Styled components
import {
  TestimonialsContainer,
  TestimonialsList,
} from "../styles/testimonialsStyles";
import { Button, Flex, SecondaryHeading } from "../styles/globalStyles";

// Testimonials data
import testimonials from "../assets/data/data";

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <Flex column>
        <SecondaryHeading>What they've said</SecondaryHeading>
        <TestimonialsList>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </TestimonialsList>
        <Button>Get Started</Button>
      </Flex>
    </TestimonialsContainer>
  );
};

export default Testimonials;
