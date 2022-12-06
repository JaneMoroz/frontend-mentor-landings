import React from "react";
import { Paragraph } from "../styles/globalStyles";

// Styled components
import {
  ArticleContainer,
  ArticleAuthor,
  ArticleImage,
  ArticleText,
} from "../styles/articlesStyles";
import { QuaternaryHeading } from "../styles/globalStyles";

interface ArticleProp {
  article: {
    id: string;
    author: string;
    title: string;
    text: string;
    image: string;
  };
}

const Article: React.FC<ArticleProp> = ({ article }) => {
  const { id, author, title, text, image } = article;
  return (
    <ArticleContainer>
      <ArticleImage src={image} alt="" />
      <ArticleText>
        <ArticleAuthor>By {author}</ArticleAuthor>
        <QuaternaryHeading>{title}</QuaternaryHeading>
        <Paragraph small>{text}</Paragraph>
      </ArticleText>
    </ArticleContainer>
  );
};

export default Article;
