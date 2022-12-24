import styled, { css } from "styled-components";

export const NavContainer = styled.nav`
  background-image: url("/images/bg-sidebar-desktop.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 4rem 10rem 0 3.2rem;
  border-radius: 10px;
`;

export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
`;
