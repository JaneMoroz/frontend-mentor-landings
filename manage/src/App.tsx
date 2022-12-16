import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

// Components
import { Features, Header, Hero, Testimonials } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Header />
        <Hero />
        <Features />
        <Testimonials />
      </main>
    </ThemeProvider>
  );
}

export default App;
