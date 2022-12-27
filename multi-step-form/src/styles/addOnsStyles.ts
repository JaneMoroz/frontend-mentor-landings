import styled, { css } from "styled-components";

type AddOnsCheckProps = {
  checked?: boolean;
};

export const AddOnsCheck = styled.label<AddOnsCheckProps>`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 2.4rem;
  padding: 2rem 1.8rem;
  border: 1px solid ${(props) => props.theme.lightGray};
  border-radius: 8px;

  ${(props) =>
    props.checked === true &&
    css`
      border: 1px solid ${(props) => props.theme.purplishBlue};
      background: ${(props) => props.theme.alabaster};
    `}

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: relative;
    display: inline-block;
    height: 20px;
    width: 20px;
    min-width: 20px;
    border: 1px solid ${(props) => props.theme.lightGray};
    border-radius: 4px;

    :after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  &:hover {
    border: 1px solid ${(props) => props.theme.purplishBlue};
  }

  input:checked ~ .checkmark {
    background: ${(props) => props.theme.purplishBlue};
    border: 1px solid ${(props) => props.theme.purplishBlue};
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 6px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid ${(props) => props.theme.white};
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  .price {
    color: ${(props) => props.theme.purplishBlue};
  }
`;
