import styled from "styled-components";

export const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
`;

export const InfoLabel = styled.label`
  font-size: 1.4rem;
  text-transform: capitalize;
`;

export const InfoInput = styled.input`
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
`;
