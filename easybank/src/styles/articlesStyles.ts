import styled, { css } from "styled-components";

export const ArticlesContainer = styled.div`
  padding: 6.4rem 0;
  background: ${(props) => props.theme.lightGray};
`;

export const ArticlesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.6rem;
`;

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 1.8rem;
  background: ${(props) => props.theme.white};
  border-radius: 1rem;
`;

export const ArticleImage = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 1rem 1rem 0 0;
`;

export const ArticleText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
  padding: 2rem;
`;

export const ArticleAuthor = styled.span`
  font-size: 1.2rem;
  color: ${(props) => props.theme.grayishBlue}; ;
`;
