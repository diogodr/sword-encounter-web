import React from "react";
import { createGlobalStyle } from "styled-components";
import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";
import { CampaignProvider } from "./contexts/campaignContext";

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
      <CampaignProvider>
        <Routes />
        <GlobalStyle />
      </CampaignProvider>
    </AuthProvider>
  );
}

export default App;
