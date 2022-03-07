import React from "react";

import { Container } from "./styles";

function DiceRoll() {
  return (
    <Container>
      {/* <select>

      </select> */}

      <label for="standard-select">Selecione um dado</label>
      <div class="select">
        <select id="standard-select">
          <option value="d4">D4</option>
          <option value="d6">D6</option>
          <option value="d8">D8</option>
          <option value="d10">D10</option>
          <option value="d12">D12</option>
          <option value="d20">D20</option>
          <option value="d100">D100</option>
        </select>
        <span class="focus"></span>
      </div>
    </Container>
  );
}

export default DiceRoll;
