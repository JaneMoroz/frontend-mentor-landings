import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 114rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0 2.4rem;
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

export const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 2.4rem;
  background: ${(props) => props.theme.brightRed};
  color: ${(props) => props.theme.white};
  border-radius: 3.2rem;
  box-shadow: 4px 6px 6px rgba(242, 95, 58, 0.2);
  transition: all 0.3s;

  &:hover {
    background: ${(props) => props.theme.veryPaleRed};
  }
`;

type LinkProps = {
  white?: boolean;
  mobile?: boolean;
};

export const Link = styled.a<LinkProps>`
  position: relative;
  color: ${(props) => props.theme.darkBlue};
  font-size: 1.4rem;
  text-transform: capitalize;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.darkGrayishBlue};
  }

  ${(props) =>
    props.white === true &&
    css`
      color: ${(props) => props.theme.lightGray} !important;

      &:hover {
        color: ${(props) => props.theme.limeGreen} !important;
        svg {
          path {
            fill: ${(props) => props.theme.limeGreen};
          }
        }
      }
      &:before {
        display: none;
      }
    `}
  ${(props) =>
    props.mobile === true &&
    css`
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
      color: ${(props) => props.theme.darkBlue} !important;

      &:before {
        display: none;
      }
    `}
`;

export const PrimaryHeading = styled.h1`
  font-size: 4.4rem;
  line-height: 5.2rem;
  margin-bottom: 3.2rem;
`;

export const SecondaryHeading = styled.h2``;

export const TertiaryHeading = styled.h3``;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.darkGrayishBlue};
  line-height: 2.4rem;
  margin-bottom: 3.2rem;
`;
