import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: ${(props) => props.theme.overlay};
`;

export const NavLinks = styled.nav`
  position: absolute;
  top: 13rem;
  left: 1;
  padding: 2.4rem;
  border-radius: 5px;
  background: ${(props) => props.theme.white};
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
`;
