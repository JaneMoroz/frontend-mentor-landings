import styled, { css } from "styled-components";

export const MobileNavContainer = styled.nav`
  display: none;

  @media only screen and (max-width: 56.25em) {
    position: absolute;
    display: block;
    width: 100%;
    background-image: url("/images/bg-sidebar-mobile.svg");
    background-repeat: no-repeat;
    background-size: cover;
    padding: 3.2rem 0 10rem 0;
  }
`;
