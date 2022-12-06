import styled, { css } from "styled-components";

export const HeaderNav = styled.div`
  padding: 2.4rem 0;
  background: ${(props) => props.theme.white};
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2.4rem;
`;
