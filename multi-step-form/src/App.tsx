import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

// Styled components
import { Container } from "./styles/globalStyles";

// Components
import {
  SharedLayout,
  Info,
  Plan,
  AddOns,
  Summary,
  MobileNav,
} from "./components";

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
              <Route
                path="plan"
                element={
                  <Plan
                    title="Select your plan"
                    details="You have the option of monthly or yearly billing."
                  />
                }
              />
              <Route
                path="add_ons"
                element={
                  <AddOns
                    title="Pick add-ons"
                    details="Add-ons help enhance your gaming experience."
                  />
                }
              />
              <Route
                path="summary"
                element={
                  <Summary
                    title="Finishing up"
                    details="Double-check everything looks OK before confirming."
                  />
                }
              />
            </Route>
          </Routes>
        </Container>
        <MobileNav />
      </main>
    </ThemeProvider>
  );
}

export default App;
