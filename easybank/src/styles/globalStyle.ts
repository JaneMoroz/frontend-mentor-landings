import normalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

// Types
type ThemeType = {
  darkBlue: string;
  limeGreen: string;
  brightCyan: string;
  grayishBlue: string;
  lightGrayishBlue: string;
  lightGray: string;
  white: string;
};

// Theme
export const theme = {
  darkBlue: "hsl(233, 26%, 24%)",
  limeGreen: "hsl(136, 65%, 51%)",
  brightCyan: "hsl(192, 70%, 51%)",
  grayishBlue: "hsl(233, 8%, 62%)",
  lightGrayishBlue: "hsl(220, 16%, 96%)",
  lightGray: "hsl(0, 0%, 98%)",
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
    font-family: 'Public Sans', sans-serif;
    font-size: 1.8rem;
    font-weight: 400;
    /* line-height: 1.6; */
  }
  main {
    position: relative;
    min-height: 100vh;
    color: ${(props) => props.theme.grayishBlue};
    background: ${(props) => props.theme.white};
  }
  ul {
    text-decoration: none;
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
  h1 {
    margin: 0;
  }
`;
