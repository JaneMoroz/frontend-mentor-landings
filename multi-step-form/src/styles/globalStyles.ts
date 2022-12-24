import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 94rem;
  padding: 1.6rem;
  background: ${(props) => props.theme.white};
  border-radius: 1.6rem;
  box-shadow: 2rem 4rem 4rem rgba(0, 0, 0, 0.08);
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

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  column-gap: 1.6rem;

  .number {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.2rem;
    width: 3.2rem;
    font-size: 1.4rem;
    font-weight: 700;
    padding: 1rem;
    color: ${(props) => props.theme.white};
    border: 1px solid ${(props) => props.theme.white};
    border-radius: 50%;
    transition: all 0.3s;
  }

  .title {
    display: flex;
    flex-direction: column;
    row-gap: 0.6rem;

    span:nth-child(1) {
      font-size: 1.2rem;
      text-transform: uppercase;
      color: ${(props) => props.theme.lightBlue};
    }

    span:nth-child(2) {
      font-size: 1.4rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: ${(props) => props.theme.white};
    }
  }

  &:hover {
    .number {
      background: ${(props) => props.theme.lightBlue};
      color: ${(props) => props.theme.purplishBlue};
      border: 1px solid ${(props) => props.theme.lightBlue};
    }
  }
`;

export const Button = styled.button`
  font-weight: 500;
  padding: 1.4rem 2.4rem;
  background: var(--marineBlue);
  color: var(--white);
  border-radius: 8px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.125);
  transition: all 0.3s;

  &:hover {
    background: var(--pastelBlue);
  }
`;

export const Link = styled.a``;

export const PrimaryHeading = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
`;

export const SecondaryHeading = styled.h2``;

export const TertiaryHeading = styled.h3``;

export const QuaternaryHeading = styled.h4``;

export const Paragraph = styled.p``;
