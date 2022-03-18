import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";

import { Container, Content, CreateCampaignButton } from "./styles";
import { useCampaign } from "../../contexts/campaignContext";
import Loader from "../../components/Loader";

function Campagnes() {
  const [campaigns, setCampagnes] = useState();
  const context = useAuth();
  const contextCampaign = useCampaign();
  const [loaderOn, setLoaderOn] = useState(false);

  function getCampaign() {
    setLoaderOn(true);
    console.log("Listagem Campaign before");
    const userId = context.user.id;
    api.get(`campaigns/user/${userId}`).then((response) => {
      setCampagnes(response.data);
      console.log("Listagem Campaign after");
    });
    setLoaderOn(false);
  }

  useEffect(() => {
    getCampaign();
  }, []);

  const selectCampaign = (campaign) => {
    const variableIsMaster = context.user.id === campaign.masterId;
    context.userTypeVerification(variableIsMaster);

    contextCampaign.SaveSelectedCampaign(campaign);
  };

  async function handleDelete(campaingId) {
    const response = await api.delete(`/campaigns/${campaingId}`);
    console.log("DELETE REPONSE: ", response);
    window.location.reload();
  }

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
              {context.user.id === campaign.masterId && (
                <div className="container-icons">
                  <div onClick={() => selectCampaign(campaign)}>
                    <a href="/criar-campanhas">
                      <img
                        src="https://img.icons8.com/external-anggara-line-anggara-putra/32/ffffff/external-edit-ecommerce-anggara-line-anggara-putra.png"
                        alt="Lápis"
                      />
                    </a>
                  </div>
                  <img
                    className="trash-icon"
                    src="https://img.icons8.com/pastel-glyph/64/ffffff/trash.png"
                    onClick={() => handleDelete(campaign.id)}
                    alt="Lixeira"
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </Content>
      <CreateCampaignButton
        onClick={() => selectCampaign({})}
        href="criar-campanhas"
      >
        Criar Campanha
      </CreateCampaignButton>
      {loaderOn && <Loader />}
    </Container>
  );
}

export default Campagnes;
