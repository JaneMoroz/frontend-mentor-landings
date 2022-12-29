import styled, { css } from "styled-components";

export const NavContainer = styled.div`
  background-image: url("/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4rem 10rem 0 3.2rem;
  border-radius: 10px;

  @media only screen and (max-width: 56.25em) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;

  @media only screen and (max-width: 56.25em) {
    flex-direction: row;
    justify-content: center;
    column-gap: 1.6rem;
  }
`;
