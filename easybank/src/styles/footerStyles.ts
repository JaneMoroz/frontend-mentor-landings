import styled, { css } from "styled-components";

export const FooterContainer = styled.footer`
  padding: 4rem 0;
  background: ${(props) => props.theme.darkBlue};
`;

export const FooterNav = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  @media only screen and (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
    row-gap: 3.2rem;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  column-gap: 1.6rem;
`;

export const FooterNavLinks = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.6rem;

  @media only screen and (max-width: 56.25em) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const FooterCTA = styled.div`
  justify-self: end;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const Copyrights = styled.span`
  color: ${(props) => props.theme.grayishBlue};
  font-size: 1.4rem;
`;
