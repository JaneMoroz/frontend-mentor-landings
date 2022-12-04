import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./styles/globalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div>
        <h1>Easybank landing</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
