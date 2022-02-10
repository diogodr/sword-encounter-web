import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";

import { Container, Content, CreateCampaignButton } from "./styles";
import { useCampaign } from "../../contexts/campaignContext";

function Campagnes() {
  const [campaigns, setCampagnes] = useState();

  const context = useAuth();

  const contextCampaign = useCampaign();

  // Método para chamar campanhas
  useEffect(() => {
    const userId = context.user.id;
    api.get(`campaigns/user/${userId}`).then((response) => {
      setCampagnes(response.data);
    });
  }, []);

  const selectCampaign = (campaign) => {
    contextCampaign.SaveSelectedCampaign(campaign);
  };

  return (
    <Container>
      <Content>
        <h2>Campanhas</h2>
        <ul>
          {campaigns?.map((campaign) => (
            <li key={campaign?.id}>
              <div onClick={() => selectCampaign(campaign)}>
                <a href="/dashboard">{campaign?.name}</a>
              </div>
            </li>
          ))}
        </ul>
      </Content>
      <CreateCampaignButton href="www.google.com">
        Criar Campanha
      </CreateCampaignButton>
    </Container>
  );
}

export default Campagnes;
