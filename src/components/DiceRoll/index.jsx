import React, { useState } from "react";
import { Container, DiceList } from "./styles";
import diceIcon from "../../assets/dice.svg";
import api from "../../services/api";

function DiceRoll({ game, selectedPlayer }) {
  const [diceFacet, setDiceFacet] = useState("d4");

  async function handleRoll() {
    let rolled = 0;

    if (diceFacet === "d4") {
      let diceValue = Math.floor(Math.random() * 5);
      rolled = diceValue;
    } else if (diceFacet === "d6") {
      let diceValue = Math.floor(Math.random() * 7);
      rolled = diceValue;
    } else if (diceFacet === "d8") {
      let diceValue = Math.floor(Math.random() * 9);
      rolled = diceValue;
    } else if (diceFacet === "d10") {
      let diceValue = Math.floor(Math.random() * 11);
      rolled = diceValue;
    } else if (diceFacet === "d12") {
      let diceValue = Math.floor(Math.random() * 13);
      rolled = diceValue;
    } else if (diceFacet === "d20") {
      let diceValue = Math.floor(Math.random() * 21);
      rolled = diceValue;
    } else if (diceFacet === "d100") {
      let diceValue = Math.floor(Math.random() * 101);
      rolled = diceValue;
    }

    await putRoll(rolled);
  }

  async function putRoll(rolled) {
    const body = {
      Type: diceFacet,
      Value: rolled.toString(),
    };

    const response = await api.put(
      `characters/${selectedPlayer.id}/add-dice`,
      body
    );
  }

  return (
    <Container>
      <label>Selecione um dado</label>
      <div>
        <div className="select">
          <select
            value={diceFacet}
            onChange={(event) => setDiceFacet(event.target.value)}
            id="standard-select"
          >
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
        <img src={diceIcon} onClick={handleRoll} alt="Dados" />
      </div>
      <DiceList>
        <ul>
          {game &&
            game.characters.map((character) => (
              <li>
                <strong>{character.attributes[0].value}: </strong>
                {character.diceRolls.map((diceRoll) => (
                  <p>
                    {diceRoll.type} | {diceRoll.value}
                  </p>
                ))}
              </li>
            ))}
        </ul>
      </DiceList>
    </Container>
  );
}

export default DiceRoll;
