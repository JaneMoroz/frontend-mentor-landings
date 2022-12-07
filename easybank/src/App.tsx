import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

// Components
import { Header, Hero, Features, Articles, Footer } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Header />
        <Hero />
        <Features />
        <Articles />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
