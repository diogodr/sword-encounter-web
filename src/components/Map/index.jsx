import React from "react";

import { Container, Mapa } from "./styles";

function Map() {
  return (
    <Container>
      <div className="select-container">
        <div className="select">
          <select id="standard-select">
            <option value="d4">D4</option>
            <option value="d6">D6</option>
            <option value="d8">D8</option>
            <option value="d10">D10</option>
            <option value="d12">D12</option>
            <option value="d20">D20</option>
            <option value="d100">D100</option>
          </select>
          <span className="focus"></span>
        </div>
        <button>Adicionar mapa</button>
      </div>
      <Mapa
        src="http://3.bp.blogspot.com/-h-OAO9JIMCA/U6SdPf1i8SI/AAAAAAAAAYA/MmCss-Udgig/s1600/10457884_10152470231476071_3391610058143746742_n.jpg"
        alt="mapa"
      />
    </Container>
  );
}

export default Map;
