import styled, { css } from "styled-components";

export const HeroContainer = styled.div`
  position: relative;
  height: calc(100vh - 88px);
  min-height: 500px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: ${(props) => props.theme.lightGray};
`;

export const HeroText = styled.div`
  width: 50%;
  max-width: 450px;
`;

export const HeroBackground = styled.div`
  position: absolute;
  top: -260px;
  left: 40%;
`;

export const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 55%;
  height: 100%;
  width: 50%;
  object-fit: cover;
`;
