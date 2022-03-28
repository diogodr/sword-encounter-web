import React, { useState } from "react";
import { useCampaign } from "../../contexts/campaignContext";
import { Container, Content, Input, SubmitButton, ModalButton } from "./styles";
import api from "../../services/api";
import { useAuth } from "../../contexts/auth";
import Modal from "react-modal";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    width: "250px",
    height: "250px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

function FichasForm() {
  const contextCampaign = useCampaign();
  const contextAuth = useAuth();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [character, setCharacter] = useState("player");
  const [modalIsOpen, setIsOpen] = useState(false);

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
      return attr;
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
    await api.post("/characters", {
      campaignId: contextCampaign.campaign.id,
      playerId: player !== undefined ? player.id : contextAuth.user.id,
      attributes: initAttributes(),
    });
    setNome("");
    setEmail("");
    openModal();
  }

  async function getPlayerID() {
    const response = await api.get("/users");
    const filteredUser = response.data.find((user) => user.email === email);
    return filteredUser;
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <h1>Criação de fichas</h1>
      <Content onSubmit={createCharacter}>
        <div>
          <div>
            <input
              className="radio-input"
              type="radio"
              id="mestre"
              name="character"
              checked={character === "master"}
              onClick={() => setCharacter("master")}
            />
            <label for="mestre">NPC</label>
          </div>
          <div>
            <input
              className="radio-input"
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1 style={{ marginTop: "8px", fontSize: "20px", textAlign: "center" }}>
          Ficha criada com sucesso
        </h1>
        <ModalButton style={{ marginTop: "30px" }}>
          <Link
            style={{ color: "#fff", textDecoration: "none" }}
            to="/todas-as-fichas"
          >
            Ir para Fichas
          </Link>
        </ModalButton>
      </Modal>
    </Container>
  );
}

export default FichasForm;
