import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

// Styled components
import { Container } from "./styles/globalStyles";
import { PrimaryHeading, Paragraph } from "./styles/globalStyles";

// Components
import { SharedLayout, Info } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Container>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route
                index
                element={
                  <Info
                    title="Personal info"
                    details="Please provide your name, email address, and phone number."
                  />
                }
              />
            </Route>
          </Routes>
        </Container>
      </main>
    </ThemeProvider>
  );
}

export default App;
