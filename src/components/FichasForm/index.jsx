import React, { useState } from "react";
import { useCampaign } from "../../contexts/campaignContext";
import { Container, Content, Input, SubmitButton } from "./styles";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";

function FichasForm() {
  const contextCampaign = useCampaign();
  const contextAuth = useAuth();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [character, setCharacter] = useState("player");

  function initAttributes() {
    const defaultAttr = [];
    defaultAttr.push({
      description: "Nome",
      value: nome,
    });
    contextCampaign.campaign.attributes.map((attr) => {
      if (attr.description !== "Nome") {
        defaultAttr.push({
          description: attr.description,
          value: null,
        });
      }
    });
    return defaultAttr;
  }

  async function createCharacter(event) {
    event.preventDefault();

    let player = undefined;

    if (character === "player") {
      player = await getPlayerID();
    }

    if (character === "player" && player === undefined) {
      alert("Usuário não cadastrado");
      return;
    }
    const response = await api.post("/characters", {
      campaignId: contextCampaign.campaign.id,
      playerId: player !== undefined ? player.id : contextAuth.user.id,
      attributes: initAttributes(),
    });
    setNome("");
    setEmail("");
  }

  async function getPlayerID() {
    const response = await api.get("/users");
    const filteredUser = response.data.find((user) => user.email === email);
    return filteredUser;
  }

  return (
    <Container>
      <h1>Criação de fichas</h1>
      <Content onSubmit={createCharacter}>
        <div>
          <div>
            <input
              type="radio"
              id="mestre"
              name="character"
              checked={character === "master"}
              onClick={() => setCharacter("master")}
            />
            <label for="mestre">Mestre</label>
          </div>
          <div>
            <input
              type="radio"
              id="jogador"
              name="character"
              checked={character === "player"}
              onClick={() => setCharacter("player")}
            />
            <label for="jogador">Jogador</label>
          </div>
        </div>
        {character === "player" && (
          <Input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="E-mail"
            type="text"
          />
        )}
        <Input
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Nome"
          type="text"
        />
        <SubmitButton type="submit">Finalizar</SubmitButton>
      </Content>
    </Container>
  );
}

export default FichasForm;
