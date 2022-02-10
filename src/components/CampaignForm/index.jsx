import React, { useState } from "react";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";

import { AddButton, Container, Content, Input, SubmitButton } from "./styles";

function CampaignForm() {
  const [campaignName, setCampaignName] = useState();
  const contextAuth = useAuth();

  async function createCharacter(event) {
    event.preventDefault();
    const response = await api.post("/campaigns", {
      name: campaignName,
      masterId: contextAuth.user.id,
    });

    console.log("Response: ", response);
    setCampaignName("");
    return response;
  }

  return (
    <Container>
      <h1>Criação de campanhas</h1>
      <Content onSubmit={createCharacter}>
        <Input
          value={campaignName}
          onChange={(event) => setCampaignName(event.target.value)}
          placeholder="Nome da campanha"
          type="text"
        />
        <Input
        // value={campaignName}
        // onChange={(event) => setCampaignName(event.target.value)}
        // placeholder="Nome da campanha"
        // type="text"
        />
        <AddButton>Adicionar Campo</AddButton>
        <SubmitButton type="submit">Finalizar</SubmitButton>
      </Content>
    </Container>
  );
}

export default CampaignForm;
