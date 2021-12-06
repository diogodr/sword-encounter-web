import React, { useState } from "react";

import logo from "../../assets/logo.svg";
import closeModalButton from "../../assets/x.png";

import api from "../../services/api";
import Modal from "react-modal";

import { Container, Content, Button } from "./styles";
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

function CreateAccount() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [status, setStatus] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  //Método para abrir modal
  function openModal() {
    setIsOpen(true);
  }

  //Método para fechar modal
  function closeModal() {
    setIsOpen(false);
  }

  // Método para criação de usuário
  function handleSubmit(event) {
    event.preventDefault();

    api
      .post("/users", {
        email: userEmail,
        password: userPassword,
      })
      .then((response) => {
        setStatus("Salvo com sucesso!");
        setUserEmail("");
        setUserPassword("");
        openModal();
      })
      .catch((exception) => {
        setStatus(exception.response.data);
        openModal();
      });
  }

  return (
    <Container>
      <Content onSubmit={handleSubmit}>
        <img src={logo} alt="Sword Encounter" />
        <h2>Criar conta</h2>
        <input
          placeholder="E-mail"
          type="email"
          id="email"
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
        />
        <input
          placeholder="Senha"
          type="password"
          id="password"
          value={userPassword}
          onChange={(event) => setUserPassword(event.target.value)}
        />
        <Button>Criar</Button>
        <p>
          Já tenha uma conta? <a href="/">Faça o Login</a>
        </p>
        <div>
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
            <h1 style={{ marginTop: "8px", fontSize: "20px" }}>{status}</h1>
            {status === "Salvo com sucesso!" && (
              <Button style={{ marginTop: "30px" }}>
                <Link style={{ color: "#fff", textDecoration: "none" }} to="/">
                  Ir para Login
                </Link>
              </Button>
            )}
          </Modal>
        </div>
      </Content>
    </Container>
  );
}

export default CreateAccount;
