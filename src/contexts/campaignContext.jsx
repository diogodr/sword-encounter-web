import { createContext, useContext, useEffect, useState } from "react";

const CampaignContext = createContext({});

export const CampaignProvider = ({ children }) => {
  const [campaign, setCampaign] = useState();

  async function SaveSelectedCampaign(payload) {
    localStorage.setItem("@App:campaign", JSON.stringify(payload));
  }

  useEffect(() => {
    const storagedCampaign = localStorage.getItem("@App:campaign");

    if (storagedCampaign) {
      setCampaign(JSON.parse(storagedCampaign));
    }
  }, []);

  return (
    <CampaignContext.Provider value={{ campaign, SaveSelectedCampaign }}>
      {children}
    </CampaignContext.Provider>
  );
};

export function useCampaign() {
  const context = useContext(CampaignContext);

  return context;
}

export default CampaignContext;
