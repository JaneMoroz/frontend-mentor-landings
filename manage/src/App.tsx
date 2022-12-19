import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

// Components
import { CTA, Features, Header, Hero, Testimonials } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Header />
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
    </ThemeProvider>
  );
}

export default App;
