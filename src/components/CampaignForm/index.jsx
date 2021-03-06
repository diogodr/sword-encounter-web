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
import Loader from "../Loader";

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
  const [loader, setLoader] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  async function saveCampaign(event) {
    event.preventDefault();

    let attrsBody = attributes;
    if (!attributes.find((attribute) => attribute.description === "Nome")) {
      attrsBody = [{ description: "Nome" }, ...attributes];
    }

    const body = {
      name: campaignName,
      masterId: contextAuth.user.id,
      attributes: attrsBody,
    };

    if (contextCampaign.campaign.id) {
      update(body);
    } else {
      create(body);
    }
    openModal();
  }

  async function create(body) {
    setLoader(true);
    await api.post("/campaigns", body);
    setCampaignName("");
    setLoader(false);
  }

  async function update(body) {
    setLoader(true);
    const newBody = {
      ...contextCampaign.campaign,
      name: body.name,
      attributes: body.attributes,
    };

    const response = await api.put(
      `/campaigns/${contextCampaign.campaign.id}`,
      newBody
    );
    setLoader(false);
  }

  function addAtrribute() {
    const attributeExists = attributes.find(
      (attribute) => attribute.description === newAttribute
    );

    if (attributeExists) {
      alert("Atributo j?? existe");
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
        <h1>Cria????o de campanhas</h1>
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
          <h1
            style={{ marginTop: "8px", fontSize: "20px", textAlign: "center" }}
          >
            Campanha criada com sucesso
          </h1>
          <ModalButton style={{ marginTop: "30px" }}>
            <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
              Ir para Campanhas
            </Link>
          </ModalButton>
        </Modal>
        {loader && <Loader />}
      </Container>
    </>
  );
}

export default CampaignForm;
