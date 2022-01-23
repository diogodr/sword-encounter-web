import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import { useCampaign } from "../../contexts/campaignContext";
import api from "../../services/api";

import { Container, Content } from "./styles";

function Ficha() {
  const contextCampaign = useCampaign();
  const contextAuth = useAuth();
  const [character, setCharacter] = useState();
  const [body, setBody] = useState([]);

  useEffect(() => {
    api.get(`/characters`).then((response) => {
      const filteredCharacters = response.data.filter(
        (filteredCharacter) =>
          filteredCharacter.campaignId === contextCampaign.campaign.id
      );
      const char = filteredCharacters.find(
        (filteredCharacter) =>
          filteredCharacter.playerId === contextAuth.user.id
      );
      setCharacter(char);
      initBody(char);
    });
  }, []);

  function initBody(char) {
    let newBody = [];

    contextCampaign?.campaign?.attributes?.map((attribute) => {
      const filteredAttribute = char?.attributes?.find(
        (charAttr) => charAttr.description === attribute.description
      );
      newBody = [...newBody, filteredAttribute];
      setBody(newBody);
    });
  }

  function setBodyAttribute(attribute, value) {
    const newBody = body.map((attr) => {
      if (attr.description === attribute.description) {
        attr.value = value;
      }
      return attr;
    });
    setBody(newBody);
  }

  function saveAttributes(event) {
    event.preventDefault();
    console.log("BODY", body);
  }

  return (
    <Container>
      <Content>
        <h1>Informações Gerais</h1>
        <form onSubmit={saveAttributes}>
          {body.map((attribute) => {
            return (
              <div>
                <label>{attribute?.description}: </label>
                <input
                  value={attribute?.value}
                  key={attribute?.description}
                  type="text"
                  onChange={(e) => setBodyAttribute(attribute, e.target.value)}
                />
              </div>
            );
          })}
          <button>Salvar</button>
        </form>
      </Content>
    </Container>
  );
}

export default Ficha;
