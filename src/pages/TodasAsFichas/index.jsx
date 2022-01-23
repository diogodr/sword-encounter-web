import React, { useEffect, useState } from "react";
import { useCampaign } from "../../contexts/campaignContext";
import api from "../../services/api";

import { Container, Content } from "./styles";

function TodasAsFichas() {
  const contextCampaign = useCampaign();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    api.get(`/characters`).then((response) => {
      const filteredCharacters = response.data.filter(
        (filteredCharacter) =>
          filteredCharacter.campaignId === contextCampaign.campaign.id
      );
      setCharacters(filteredCharacters);
    });
  }, []);

  return (
    <Container>
      <Content>
        <h1>Todas as Fichas</h1>
        <div>
          {characters?.map((character) => (
            <a href="/ficha">{character.id}</a>
          ))}
        </div>
      </Content>
    </Container>
  );
}

export default TodasAsFichas;
