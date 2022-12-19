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
  alignStart?: boolean;
  column?: boolean;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.6rem;
  row-gap: 1.6rem;

  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
  }

  ${(props) =>
    props.spaceBetween === true &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.alignStart === true &&
    css`
      align-items: flex-start;

      @media only screen and (max-width: 56.25em) {
        align-items: center;
      }
    `}
  ${(props) =>
    props.column === true &&
    css`
      flex-direction: column;
    `}
`;

type ButtonProps = {
  cta?: boolean;
};

export const Button = styled.button<ButtonProps>`
  font-size: 1.3rem;
  font-weight: 700;
  text-transform: capitalize;
  padding: 1.2rem 3.2rem;
  background: ${(props) => props.theme.brightRed};
  color: ${(props) => props.theme.white};
  border-radius: 2.2rem;
  box-shadow: 4px 6px 6px rgba(242, 95, 58, 0.2);
  transition: all 0.3s;

  &:hover {
    filter: brightness(1.4);
  }

  ${(props) =>
    props.cta === true &&
    css`
      background: ${(props) => props.theme.white};
      color: ${(props) => props.theme.brightRed};
      z-index: 9;
    `}
`;

type RoundButtonProps = {
  active?: boolean;
};

export const RoundButton = styled.span<RoundButtonProps>`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
  color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.brightRed};
  border-radius: 50%;
  transition: all 0.3s;

  ${(props) =>
    props.active === true &&
    css`
      background: ${(props) => props.theme.brightRed};
    `}
`;

type LinkProps = {
  white?: boolean;
  mobile?: boolean;
};

export const Link = styled.a<LinkProps>`
  position: relative;
  color: ${(props) => props.theme.darkBlue};
  font-size: 1.3rem;
  font-weight: 500;
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
  font-size: 5rem;
  font-weight: 700;
  line-height: 5.6rem;
  margin-bottom: 2.4rem;
`;

type SecondaryHeadingProps = {
  cta?: boolean;
};

export const SecondaryHeading = styled.h2<SecondaryHeadingProps>`
  font-size: 4rem;
  line-height: 4.4rem;
  font-weight: 700;
  margin-bottom: 2.4rem;

  ${(props) =>
    props.cta === true &&
    css`
      color: ${(props) => props.theme.white};
      margin-bottom: 0;
      width: 50%;
      z-index: 9;

      @media only screen and (max-width: 37.5em) {
        text-align: center;
        width: 100%;
        margin-bottom: 1.4rem;
      }
    `}
`;

export const TertiaryHeading = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
`;

type ParagraphProps = {
  fullWidth?: boolean;
};

export const Paragraph = styled.p<ParagraphProps>`
  color: ${(props) => props.theme.darkGrayishBlue};
  line-height: 2.8rem;
  margin-bottom: 3.2rem;
  width: 80%;

  ${(props) =>
    props.fullWidth === true &&
    css`
      width: 100%;
    `}

  @media only screen and (max-width: 56.25em) {
    margin: 0 auto 3.2rem auto;
  }
`;
