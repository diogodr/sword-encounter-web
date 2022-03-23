import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import CampaignContext, { useCampaign } from "../../contexts/campaignContext";
import api from "../../services/api";
import Modal from "react-modal";
import closeModalButton from "../../assets/x.png";

import { Container, Content } from "./styles";
import Loader from "../../components/Loader";
import { useParams } from "react-router-dom";

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
    textAlign: "center",
    color: "#797979",
  },
};

function Ficha() {
  const contextCampaign = useCampaign();
  const contextAuth = useAuth();
  const [character, setCharacter] = useState();
  const [body, setBody] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [removeLoading, setRemoveLoading] = useState(false);

  const { charId } = useParams();

  function getCharacter() {
    api.get(`/characters`).then((response) => {
      setRemoveLoading(false);
      const filteredCharacters = response.data.filter(
        (filteredCharacter) =>
          filteredCharacter.campaignId === contextCampaign.campaign.id
      );
      let char = {};
      if (charId) {
        char = filteredCharacters.find(
          (filteredCharacter) => filteredCharacter.id === charId
        );
      } else {
        char = filteredCharacters.find(
          (filteredCharacter) =>
            filteredCharacter.playerId === contextAuth.user.id
        );
      }

      setCharacter(char);
      populateAttrs(contextCampaign.campaign.attributes, char.attributes);
      setRemoveLoading(true);
    });
  }

  function populateAttrs(campaignAttrs, charAttrs) {
    const newBody = campaignAttrs.map((campaignAttr) => {
      charAttrs.map((charAttr) => {
        if (campaignAttr.description === charAttr.description) {
          campaignAttr.value = charAttr.value;
        }
        return charAttr;
      });
      return campaignAttr;
    });

    setBody(newBody);
  }

  useEffect(() => {
    getCharacter();
  }, []);

  function setBodyAttribute(attribute, value) {
    const newBody = body.map((attr) => {
      if (attr.description === attribute.description) {
        attr.value = value;
      }
      return attr;
    });
    setBody(newBody);
  }

  async function saveAttributes(event) {
    setRemoveLoading(false);
    event.preventDefault();
    const putBody = { ...character, attributes: body };

    await api.put(`/characters/${character.id}`, putBody);
    setRemoveLoading(true);
    openModal();
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <Content>
        <h1>Informações Gerais</h1>
        <form onSubmit={saveAttributes}>
          {body.map((attribute) => {
            return (
              <div key={attribute?.description}>
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
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <img
              width="14px"
              height="14px"
              src={closeModalButton}
              alt="fechar modal"
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                cursor: "pointer",
              }}
              onClick={closeModal}
            />
            <h1 style={{ marginTop: "8px", fontSize: "20px" }}>
              Alterações salvas com sucesso!
            </h1>
          </Modal>
        </form>
      </Content>
      {!removeLoading && <Loader />}
    </Container>
  );
}

export default Ficha;
