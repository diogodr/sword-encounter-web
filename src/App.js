import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
      <Header />
    </AuthProvider>
  );
}

export default App;
