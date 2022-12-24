import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

// Styled components
import { Container } from "./styles/globalStyles";

// Components
import { Step } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Container>
          <Step />
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
