import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import trashIcon from "../../assets/trash.svg";

import {
  AddButton,
  Container,
  Content,
  Input,
  ModalButton,
  SubmitButton,
} from "./styles";
import { useCampaign } from "../../contexts/campaignContext";

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

function CampaignForm() {
  const [campaignName, setCampaignName] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newAttribute, setNewAttribute] = useState("");
  const [attributes, setAttributes] = useState([]);
  const contextAuth = useAuth();
  const contextCampaign = useCampaign();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function saveCampaign(event) {
    event.preventDefault();

    const body = {
      name: campaignName,
      masterId: contextAuth.user.id,
      attributes: attributes,
    };

    if (contextCampaign.campaign.id) {
      update(body);
    } else {
      create(body);
    }
    openModal();
  }

  async function create(body) {
    const response = await api.post("/campaigns", body);
    setCampaignName("");
    console.log("CREATE: ", response);
  }

  async function update(body) {
    const newBody = {
      ...contextCampaign.campaign,
      name: body.name,
      attributes: body.attributes,
    };

    const response = await api.put(
      `/campaigns/${contextCampaign.campaign.id}`,
      newBody
    );
    console.log("CREATE: ", response);
  }

  function addAtrribute() {
    const attributeExists = attributes.find(
      (attribute) => attribute.description === newAttribute
    );

    if (attributeExists) {
      alert("Atributo já existe");
      return;
    }
    setAttributes([...attributes, { description: newAttribute }]);
    setNewAttribute("");
  }

  function removeAttribute(value) {
    const attrs = attributes.filter(
      (attribute) => attribute.description !== value.description
    );
    setAttributes(attrs);
  }

  function populateCampaign() {
    if (contextCampaign.campaign.name) {
      console.log("CONTEXT CAMPAIGN: ", contextCampaign.campaign.name);
      setAttributes(contextCampaign.campaign.attributes);
      setCampaignName(contextCampaign.campaign.name);
    }
  }

  useEffect(() => {
    populateCampaign();
  }, []);

  return (
    <>
      <Container>
        <h1>Criação de campanhas</h1>
        <Content onSubmit={saveCampaign}>
          <Input
            value={campaignName}
            onChange={(event) => setCampaignName(event.target.value)}
            placeholder="Nome da campanha"
            type="text"
          />
          <Input
            value={newAttribute}
            onChange={(event) => setNewAttribute(event.target.value)}
            placeholder="Novo atributo"
            type="text"
          />

          <h2>Atributos da campanha</h2>
          {attributes.map((attribute) => (
            <div className="attr-container">
              <p>{attribute.description}</p>
              <img
                className="trash-icon"
                src={trashIcon}
                onClick={() => removeAttribute(attribute)}
                alt="Lixeira"
              />
            </div>
          ))}

          <AddButton onClick={addAtrribute}>Adicionar Atributo</AddButton>
          <SubmitButton type="submit">Finalizar</SubmitButton>
        </Content>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h1 style={{ marginTop: "8px", fontSize: "20px" }}>Deu bom ?</h1>
          <ModalButton style={{ marginTop: "30px" }}>
            <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
              Ir para Campanhas
            </Link>
          </ModalButton>
        </Modal>
      </Container>
    </>
  );
}

export default CampaignForm;
