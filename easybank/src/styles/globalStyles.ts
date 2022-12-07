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
  color: ${(props) => props.theme.white};
  background: linear-gradient(
    to right,
    ${(props) => props.theme.limeGreen},
    ${(props) => props.theme.brightCyan}
  );
  text-transform: capitalize;
  padding: 1.4rem 3.2rem;
  border-radius: 2.8rem;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.125);
  cursor: pointer;
  transition: all 0.3s;
`;

type LinkProps = {
  white?: boolean;
  mobile?: boolean;
};

export const Link = styled.a<LinkProps>`
  color: ${(props) => props.theme.grayishBlue};
  font-size: 1.4rem;
  text-transform: capitalize;
  ${(props) =>
    props.white === true &&
    css`
      color: ${(props) => props.theme.lightGray} !important;
    `}
  ${(props) =>
    props.mobile === true &&
    css`
      font-size: 2rem;
      color: ${(props) => props.theme.darkBlue} !important;
    `}
`;

export const PrimaryHeading = styled.h1`
  color: ${(props) => props.theme.darkBlue};
  font-size: 3.6rem;
  font-weight: 300;
  line-height: 4.8rem;
  margin-bottom: 2rem;
`;

export const SecondaryHeading = styled.h2`
  color: ${(props) => props.theme.darkBlue};
  font-size: 2.8rem;
  font-weight: 300;
  line-height: 3.2rem;
  margin-bottom: 2rem;
`;

export const TertiaryHeading = styled.h3`
  color: ${(props) => props.theme.darkBlue};
  font-size: 2rem;
  font-weight: 300;
  line-height: 3.2rem;
`;

export const QuaternaryHeading = styled.h4`
  color: ${(props) => props.theme.darkBlue};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2rem;
`;

type ParagraphProps = {
  big?: boolean;
  medium?: boolean;
  small?: boolean;
  smallerWidth?: boolean;
};

export const Paragraph = styled.p<ParagraphProps>`
  color: ${(props) => props.theme.grayishBlue};
  font-size: 1.4rem;
  ${(props) =>
    props.big === true &&
    css`
      font-size: 1.8rem;
      line-height: 2.6rem;
      margin-bottom: 2.4rem;
    `}
  ${(props) =>
    props.medium === true &&
    css`
      font-size: 1.6rem;
      line-height: 2.4rem;
    `}
     ${(props) =>
    props.small === true &&
    css`
      font-size: 1.4rem;
      line-height: 1.8rem;
    `}
         ${(props) =>
    props.smallerWidth === true &&
    css`
      width: 60%;
    `}
`;
