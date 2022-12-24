import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
`;

export const FormLabel = styled.label`
  font-size: 1.4rem;
  text-transform: capitalize;
`;

export const FormInput = styled.input`
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
