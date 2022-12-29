import styled, { css } from "styled-components";

export const PlansContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.8rem;

  @media only screen and (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;
  }
`;

type PlanButtonProps = {
  checked?: boolean;
};

export const PlanButton = styled.button<PlanButtonProps>`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  padding: 1.6rem 2rem;
  border: 1px solid ${(props) => props.theme.lightGray};
  border-radius: 8px;
  transition: all 0.3s;

  ${(props) =>
    props.checked === true &&
    css`
      background: ${(props) => props.theme.alabaster};
      border: 1px solid ${(props) => props.theme.purplishBlue};
    `}

  svg {
    margin-bottom: 4rem;
  }

  &:hover {
    background: ${(props) => props.theme.alabaster};
    border: 1px solid ${(props) => props.theme.purplishBlue};
  }

  @media only screen and (max-width: 56.25em) {
    flex-direction: row;
    align-items: center;
    column-gap: 1.4rem;

    svg {
      margin-bottom: 0;
    }
  }
`;

export const PlanText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.7rem;
`;

export const PlanType = styled.div`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.alabaster};
  padding: 1.4rem;
  border-radius: 8px;
  margin-top: 1.8rem;
`;

export const DurationSwitch = styled.div`
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
