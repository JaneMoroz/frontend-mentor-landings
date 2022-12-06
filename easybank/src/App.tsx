import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

// Components
import { Header, Hero, Features, Articles, Footer } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Features />
      <Articles />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
