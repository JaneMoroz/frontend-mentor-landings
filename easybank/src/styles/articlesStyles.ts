import styled from "styled-components";

export const ArticlesContainer = styled.section`
  padding: 6.4rem 0;
  background: ${(props) => props.theme.lightGray};

  @media only screen and (max-width: 56.25em) {
    text-align: center;
  }
`;

export const ArticlesList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1.6rem;

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 37.5em) {
    display: flex;
    flex-direction: column;
    row-gap: 3.2rem;
  }
`;

export const ArticleContainer = styled.a`
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
  padding: 2rem 3.2rem 3.2rem 3.2rem;
  text-align: start;
`;

export const ArticleAuthor = styled.span`
  font-size: 1.2rem;
  color: ${(props) => props.theme.grayishBlue}; ;
`;
