import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const SummaryContainer = styled.div`
  padding: 1.6rem 2.4rem;
  background: ${(props) => props.theme.alabaster};
  display: flex;
  flex-direction: column;

  .plan {
    display: flex;
    flex-direction: column;
  }

  .addons {
    padding: 1.6rem 0;
    border-top: 1px solid ${(props) => props.theme.lightGray};
    display: flex;
    flex-direction: column;
    row-gap: 1.6rem;

    li {
      display: flex;
      justify-content: space-between;
      font-size: 1.4rem;

      span: nth-child(1) {
        line-height: 2rem;
        color: ${(props) => props.theme.coolGray};
      }
    }
  }
`;

export const SummaryTotal = styled.div`
  padding: 1.6rem 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span: nth-child(1) {
    font-size: 1.4rem;
    color: ${(props) => props.theme.coolGray};
  }

  span: nth-child(2) {
    font-size: 2rem;
    font-weight: 700;
    color: ${(props) => props.theme.purplishBlue};
  }
`;

export const ChangePlanLink = styled(Link)`
  padding: 1.2rem 0;
  font-size: 1.4rem;
  text-transform: capitalize;
  text-decoration: underline;
  color: ${(props) => props.theme.coolGray};
  margin-bottom: 1.6rem;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.purplishBlue};
  }
`;
