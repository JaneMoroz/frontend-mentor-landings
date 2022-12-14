import normalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

// Types
type ThemeType = {
  brightRed: string;
  darkBlue: string;
  darkGrayishBlue: string;
  veryDarkBlue: string;
  veryPaleRed: string;
  veryLightGray: string;
  white: string;
};

// Theme
export const theme = {
  brightRed: "hsl(12, 88%, 59%)",
  darkBlue: "hsl(228, 39%, 23%)",
  darkGrayishBlue: "hsl(227, 12%, 61%)",
  veryDarkBlue: "hsl(233, 12%, 13%)",
  veryPaleRed: "hsl(13, 100%, 96%)",
  veryLightGray: "hsl(0, 0%, 98%)",
  white: "hsl(0, 0%, 100%)",
};

// Global style
export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${normalize}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%; // 1rem = 10px
    @media only screen and (max-width: 56.25em) {
      font-size: 56.25%; //1 rem = 9px
    }
    @media only screen and (max-width: 37.5em) {
      font-size: 50%; //1 rem = 8px,
    }
  }
  body {
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }
  main {
    position: relative;
    min-height: 100vh;
    color: ${(props) => props.theme.darkBlue};
    background: ${(props) => props.theme.white};
    overflow-x: hidden;
  }
  ul {
    text-decoration: none;
    list-style: none;
  }
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  input,textarea {
    border: none;
    outline: none;
  }
  h1, h2, h3 {
    margin: 0;
  }
`;
