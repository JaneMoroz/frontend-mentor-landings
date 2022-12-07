import React from "react";

// Components
import Article from "./Article";

// Styled components
import { ArticlesContainer, ArticlesList } from "../styles/articlesStyles";
import { Container, SecondaryHeading } from "../styles/globalStyles";

// Articles data
import articles from "../assets/data/data";

const Articles = () => {
  return (
    <ArticlesContainer>
      <Container>
        <SecondaryHeading>Latest Articles</SecondaryHeading>
        <ArticlesList>
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </ArticlesList>
      </Container>
    </ArticlesContainer>
  );
};

export default Articles;
