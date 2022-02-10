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
          <div className="listChar">
            {characters?.map((character) => (
              <a href="/ficha">{character.attributes[0].value}</a>
            ))}
          </div>
          <div className="addChar">
            <a href="#">Adicionar Personagem</a>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default TodasAsFichas;
