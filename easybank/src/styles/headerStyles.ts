import styled from "styled-components";

export const HeaderNav = styled.header`
  position: relative;
  padding: 1.6rem 0;
  background: ${(props) => props.theme.white};
  z-index: 999;

  button:last-child {
    display: none;
  }

  @media only screen and (max-width: 56.25em) {
    button {
      display: none;
    }

    button:last-child {
      display: flex;
    }
  }
`;

export const NavLinks = styled.nav`
  a {
    margin-right: 2.4rem;
  }

  a:last-child {
    margin-right: 0;
  }

  @media only screen and (max-width: 56.25em) {
    display: none;
  }
`;

export const Hamburger = styled.button`
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem;
  cursor: pointer;
  transition: all 0.3s;
`;
