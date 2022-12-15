import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

// Components
import { Header, Hero } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Header />
        <Hero />
      </main>
    </ThemeProvider>
  );
}

export default App;
