import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  padding: 1.6rem;
  margin: 3.2rem 0;
  background: ${(props) => props.theme.white};
  border-radius: 1.6rem;
  box-shadow: 2rem 4rem 4rem rgba(0, 0, 0, 0.08);

  @media only screen and (max-width: 56.25em) {
    margin: 12rem 1.6rem;
    z-index: 999;
  }
`;

type FlexProps = {
  spaceBetween?: boolean;
  justifyEnd?: boolean;
  column?: boolean;
  alignEnd?: boolean;
  center?: boolean;
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  justify-content: center;
  column-gap: 1.6rem;
  row-gap: 1.6rem;
  ${(props) =>
    props.spaceBetween === true &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.justifyEnd === true &&
    css`
      justify-content: flex-end;
    `}
  ${(props) =>
    props.column === true &&
    css`
      width: 100%;
      flex-direction: column;
    `}
    ${(props) =>
    props.alignEnd === true &&
    css`
      height: 100%;
      align-items: flex-end;
    `}
     ${(props) =>
    props.center === true &&
    css`
      align-items: center;
      text-align: center;
      height: 100%;
    `}
`;

type NavListItemProps = {
  active?: boolean;
};

export const NavListItem = styled.li<NavListItemProps>`
  display: flex;
  align-items: center;
  column-gap: 1.6rem;
  cursor: default;

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

    @media only screen and (max-width: 56.25em) {
      height: 4.8rem;
      width: 4.8rem;
    }
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
      white-space: nowrap;
    }

    @media only screen and (max-width: 56.25em) {
      display: none;
    }
  }

  ${(props) =>
    props.active === true &&
    css`
      .number {
        background: ${(props) => props.theme.lightBlue};
        color: ${(props) => props.theme.purplishBlue};
        border: 1px solid ${(props) => props.theme.lightBlue};
      }
    `}
`;

export const FormLink = styled.button`
  font-weight: 500;
  text-transform: capitalize;
  padding: 1.4rem 2.4rem;
  background: ${(props) => props.theme.marineBlue};
  color: ${(props) => props.theme.white};
  border-radius: 8px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.125);
  transition: all 0.3s;

  &:hover {
    background: ${(props) => props.theme.purplishBlue};
  }
`;

export const TextLink = styled(Link)`
  font-weight: 500;
  text-transform: capitalize;
  padding: 1.4rem 2.4rem;
  color: ${(props) => props.theme.coolGray};
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.marineBlue};
  }
`;

export const PrimaryHeading = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.coolGray};
  line-height: 2.5rem;
  margin-bottom: 3.6rem;
`;

export const FormContainer = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;

export const FormTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) => props.theme.marineBlue};
  text-transform: capitalize;
`;

export const FormDetails = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.coolGray};
`;

export const FormButtons = styled.div`
  height: 100%;

  @media only screen and (max-width: 56.25em) {
    position: absolute;
    height: auto;
    width: 100%;
    padding: 1.6rem 0.6rem;
    background: ${(props) => props.theme.white};
    top: 100%;
    left: 0;
    transform: translateY(-100%);
  }
`;
