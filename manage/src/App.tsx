import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

// Components
import {
  CTA,
  Features,
  Footer,
  Header,
  Hero,
  Testimonials,
} from "./components";

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
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
