import React, { useState } from "react";

import logoImg from "../../assets/logo.svg";
import engrenagemIcon from "../../assets/engrenagem-icon.svg";

import { Container } from "./styles";
import { useAuth } from "../../contexts/auth";

function Header() {
  const { Logout } = useAuth();
  const [tooltipisOpen, setTooltipIsOpen] = useState(false);

  function handleToggleTooltip() {
    setTooltipIsOpen(!tooltipisOpen);
  }

  async function handleLogout() {
    Logout();
  }

  return (
    <Container>
      <img className="logo-header" src={logoImg} alt="Sword Encounter" />
      <div className="profile-container">
        <p>diogo@gmail.com</p>
        <img
          onClick={() => handleToggleTooltip()}
          className="config-icon"
          src={engrenagemIcon}
          alt="Ícone de engrenagem"
        />
        <div className={tooltipisOpen ? "" : "isHidden"}>
          <a href="/criar-campanha">Criar campanha</a>
          <a href="/fichas">Fichas</a>
          <a href="/imagens">Imagens</a>
          <a onClick={handleLogout} href="/">
            Sair
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Header;
