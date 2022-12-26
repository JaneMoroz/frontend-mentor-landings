import styled, { css } from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
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

export const FormPlans = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.8rem;
`;

export const FormPlanButton = styled.button`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  padding: 1.6rem 2rem;
  border: 1px solid ${(props) => props.theme.lightGray};
  border-radius: 8px;
  transition: all 0.3s;

  svg {
    margin-bottom: 4rem;
  }

  &:hover {
    background: ${(props) => props.theme.alabaster};
    border: 1px solid ${(props) => props.theme.purplishBlue};
  }
`;

export const FormPlanType = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.alabaster};
  padding: 1.4rem;
  border-radius: 8px;
  margin-top: 1.8rem;
`;

export const FormSwitch = styled.div`
  position: relative;
  display: inline-flex;
  background-color: ${(props) => props.theme.marineBlue};
  border-radius: 10px;
  width: 38px;
  height: 20px;

  [type="radio"] {
    position: absolute;
    opacity: 0%;
  }

  [type="radio"]#monthly {
    height: 100%;
    width: 50%;
    top: 0;
    left: 0;
  }

  [type="radio"]#yearly {
    height: 100%;
    width: 50%;
    top: 0;
    left: 100%;
    transform: translateX(-100%);
  }

  [type="radio"]:checked#monthly ~ label[for="monthly"],
  [type="radio"]:checked#yearly ~ label[for="yearly"] {
    color: ${(props) => props.theme.marineBlue};
  }

  [type="radio"]:checked#monthly + label[for="yearly"] ~ .slider {
    transform: none;
  }

  [type="radio"]:checked#yearly + label[for="monthly"] ~ .slider {
    transform: translateX(140%);
  }

  label {
    position: absolute;
    color: ${(props) => props.theme.coolGray};
    font-size: 1.4rem;
    font-weight: 500;
    z-index: 1;
    cursor: pointer;
  }

  label[for="monthly"] {
    left: -250%;
  }

  label[for="yearly"] {
    left: 250%;
  }

  .slider {
    position: absolute;
    top: 4px;
    left: 4px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.white};
    transition: all 0.3s;
  }
`;

type FormAddOnsCheckProps = {
  checked?: boolean;
};

export const FormAddOnsCheck = styled.label<FormAddOnsCheckProps>`
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
