import React from "react";
import { createGlobalStyle } from "styled-components";
import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";
import { CampaignProvider } from "./contexts/campaignContext";
import { LoaderProvider } from "./contexts/contextLoader";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <LoaderProvider>
      <AuthProvider>
        <CampaignProvider>
          <Routes />
          <GlobalStyle />
        </CampaignProvider>
      </AuthProvider>
    </LoaderProvider>
  );
}

export default App;
