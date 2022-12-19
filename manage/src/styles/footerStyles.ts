import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  padding: 4rem 0;
  background: ${(props) => props.theme.veryDarkBlue};
`;

export const FooterNav = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media only screen and (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
    row-gap: 4rem;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4.8rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  column-gap: 1.8rem;
`;

export const FooterNavLinks = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.8rem;
`;

export const FooterCTA = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  row-gap: 4.8rem;
`;

export const Copyrights = styled.span`
  color: ${(props) => props.theme.darkGrayishBlue};
  font-size: 1.4rem;
`;

export const Form = styled.form`
  display: flex;
  column-gap: 1.2rem;
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  width: 0;
  opacity: 0;
  z-index: -999;
`;

export const Input = styled.input`
  font-size: 1.4rem;
  padding: 1.2rem 2rem;
  border-radius: 2.2rem;
`;

export const ErrorMessage = styled.span`
  position: absolute;
  font-size: 1rem;
  width: 100%;
  top: 100%;
  left: 0;
  padding-left: 2rem;
  padding-top: 0.8rem;
  color: ${(props) => props.theme.error};
`;
