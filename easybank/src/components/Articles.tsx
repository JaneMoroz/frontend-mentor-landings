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
      <Container
        initial={{ opacity: 0, y: 72 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.5,
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        }}
        viewport={{ once: true }}
      >
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
