import React, { useState } from "react";

import logoImg from "../../assets/logo.svg";
import engrenagemIcon from "../../assets/engrenagem-icon.svg";

import { Container } from "./styles";
import { useAuth } from "../../contexts/auth";
import { useCampaign } from "../../contexts/campaignContext";

function Header() {
  const context = useAuth();
  const contextCampaign = useCampaign();
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
        <p>{context.user?.email}</p>
        <img
          onClick={() => handleToggleTooltip()}
          className="config-icon"
          src={engrenagemIcon}
          alt="Ícone de engrenagem"
        />
        <div className={tooltipisOpen ? "" : "isHidden"}>
          <a href="/">Campanhas</a>
          {context.user.id === contextCampaign.campaign.masterId ? (
            <a href="/todas-as-fichas">Fichas</a>
          ) : (
            <a href="/ficha">Ficha</a>
          )}

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
