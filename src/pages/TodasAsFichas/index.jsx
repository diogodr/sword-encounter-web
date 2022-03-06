import React, { useEffect, useState } from "react";
import { useCampaign } from "../../contexts/campaignContext";
import api from "../../services/api";
import { Link } from "react-router-dom";

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
              <Link to={{ pathname: `/ficha/${character.id}` }}>
                {character.attributes[0].value}
              </Link>
              // <Link to="/ficha">{character.attributes[0].value}</Link>
            ))}
          </div>
          <div className="addChar">
            <a href="/criar-ficha">Adicionar Personagem</a>
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default TodasAsFichas;
