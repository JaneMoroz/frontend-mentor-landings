import styled, { css } from "styled-components";

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
`;

export const InfoLabel = styled.label`
  font-size: 1.4rem;
  text-transform: capitalize;
  display: flex;
  justify-content: space-between;

  .error {
    font-weight: 700;
    text-transform: none;
    color: ${(props) => props.theme.strawberryRed};
  }
`;

type InfoInputProps = {
  error?: boolean;
};

export const InfoInput = styled.input<InfoInputProps>`
  padding: 1.2rem 1.6rem;
  border: 1px solid ${(props) => props.theme.lightGray};
  border-radius: 8px;

  &::placeholder {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${(props) => props.theme.coolGray};
    line-height: 2.5rem;
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.purplishBlue};
  }

  ${(props) =>
    props.error === true &&
    css`
      border: 1px solid ${(props) => props.theme.strawberryRed};
    `}
`;
