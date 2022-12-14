import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 114rem;
  margin: 0 auto;
`;

type FlexProps = {
  spaceBetween?: boolean;
  column?: boolean;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.6rem;
  row-gap: 1.6rem;
  ${(props) =>
    props.spaceBetween === true &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.column === true &&
    css`
      flex-direction: column;
    `}
`;

export const Button = styled.button``;

export const Link = styled.a``;

export const PrimaryHeading = styled.h1``;

export const SecondaryHeading = styled.h2``;

export const TertiaryHeading = styled.h3``;

export const Paragraph = styled.p``;
