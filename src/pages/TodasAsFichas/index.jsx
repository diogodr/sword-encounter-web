import React, { useEffect, useState } from "react";
import { useCampaign } from "../../contexts/campaignContext";
import api from "../../services/api";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import { Container, Content } from "./styles";
import Loader from "../../components/Loader";

function TodasAsFichas() {
  const contextCampaign = useCampaign();
  const contextAuth = useAuth();
  const [characters, setCharacters] = useState();
  const [loader, setLoader] = useState(false);

  function getFichas() {
    setLoader(true);
    api.get(`/characters`).then((response) => {
      const filteredCharacters = response.data.filter(
        (filteredCharacter) =>
          filteredCharacter.campaignId === contextCampaign.campaign.id
      );
      setCharacters(filteredCharacters);
      setLoader(false);
    });
  }

  useEffect(() => {
    getFichas();
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
          {contextAuth.isMaster && (
            <div className="addChar">
              <a href="/criar-fichas">Adicionar Personagem</a>
            </div>
          )}
        </div>
      </Content>
      {loader && <Loader />}
    </Container>
  );
}

export default TodasAsFichas;
