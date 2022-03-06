import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";

import { Container, Content, CreateCampaignButton } from "./styles";
import { useCampaign } from "../../contexts/campaignContext";
import { useLoader } from "../../contexts/contextLoader";

import { Link } from "react-router-dom";

import Loader from "../../components/Loader";

function Campagnes() {
  const [campaigns, setCampagnes] = useState();

  const contextLoader = useLoader();
  const context = useAuth();
  const contextCampaign = useCampaign();

  // Método para chamar campanhas
  function getCampaign() {
    contextLoader.turnOn();
    console.log("Listagem Campaign before");
    const userId = context.user.id;
    api.get(`campaigns/user/${userId}`).then((response) => {
      setCampagnes(response.data);
      contextLoader.turnOff();
      console.log("Listagem Campaign after");
    });
  }

  useEffect(() => {
    getCampaign();
  }, []);

  const selectCampaign = (campaign) => {
    const variableIsMaster = context.user.id === campaign.masterId;
    context.userTypeVerification(variableIsMaster);

    contextCampaign.SaveSelectedCampaign(campaign);
  };

  const [loaderOn, setLoaderOn] = useState(false);

  useEffect(() => {
    setLoaderOn(contextLoader.loader);
  }, [contextLoader.loader]);

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
              <div onClick={() => selectCampaign(campaign)}>
                <a href="/criar-campanhas">Editar</a>
              </div>
            </li>
          ))}
        </ul>
      </Content>
      <CreateCampaignButton href="criar-campanhas">
        Criar Campanha
      </CreateCampaignButton>
      {/* {loaderOn && <Loader />} */}
    </Container>
  );
}

export default Campagnes;
