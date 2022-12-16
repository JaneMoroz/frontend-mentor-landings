import React from "react";
import { Flex, Paragraph, TertiaryHeading } from "../styles/globalStyles";

// Styled components
import { TestimonialListItem } from "../styles/testimonialsStyles";

interface TestimonialProp {
  testimonial: {
    id: number;
    image: string;
    name: string;
    text: string;
  };
}

const Testimonial: React.FC<TestimonialProp> = ({ testimonial }) => {
  return (
    <TestimonialListItem>
      <Flex column>
        <img src={testimonial.image} alt="" />
        <TertiaryHeading>{testimonial.name}</TertiaryHeading>
        <Paragraph>{testimonial.text}</Paragraph>
      </Flex>
    </TestimonialListItem>
  );
};

export default Testimonial;
