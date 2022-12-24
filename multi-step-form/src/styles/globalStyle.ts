import normalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

// Types
type ThemeType = {
  marineBlue: string;
  purplishBlue: string;
  pastelBlue: string;
  lightBlue: string;
  strawberryRed: string;
  coolGray: string;
  lightGray: string;
  magnolia: string;
  alabaster: string;
  white: string;
};

// Theme
export const theme = {
  marineBlue: "hsl(213, 96%, 18%)",
  purplishBlue: "hsl(243, 100%, 62%)",
  pastelBlue: "hsl(228, 100%, 84%)",
  lightBlue: "hsl(206, 94%, 87%)",
  strawberryRed: "hsl(354, 84%, 57%)",
  coolGray: "hsl(231, 11%, 63%)",
  lightGray: "hsl(229, 24%, 87%)",
  magnolia: "hsl(217, 100%, 97%)",
  alabaster: "hsl(231, 100%, 99%)",
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
     font-family: 'Ubuntu', sans-serif;;
    font-size: 1.6rem;
    font-weight: 400;
  }
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    color: ${(props) => props.theme.marineBlue};
    background: ${(props) => props.theme.magnolia};
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
