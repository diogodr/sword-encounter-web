import React, { useState } from "react";

import { Container, DiceList } from "./styles";

import diceIcon from "../../assets/dice.svg";

function DiceRoll() {
  const [diceFacet, setDiceFacet] = useState("d4");
  const [diceRolled, setDiceRolled] = useState("");
  const [apiSimulator, setApiSimulator] = useState([
    {
      user: "diogoweb1@email.com",
      diceRolled: "d20",
      diceValue: "4",
    },
    {
      user: "giovanna@email.com",
      diceRolled: "d100",
      diceValue: "38",
    },
    {
      user: "camilo@email.com",
      diceRolled: "d6",
      diceValue: "6",
    },
    {
      user: "katia@email.com",
      diceRolled: "d6",
      diceValue: "1",
    },
  ]);

  function handleRoll() {
    if (diceFacet === "d4") {
      let diceValue = Math.floor(Math.random() * 5);
      setDiceRolled(diceValue.toString());
    } else if (diceFacet === "d6") {
      let diceValue = Math.floor(Math.random() * 7);
      setDiceRolled(diceValue.toString());
    } else if (diceFacet === "d8") {
      let diceValue = Math.floor(Math.random() * 9);
      setDiceRolled(diceValue.toString());
    } else if (diceFacet === "d10") {
      let diceValue = Math.floor(Math.random() * 11);
      setDiceRolled(diceValue.toString());
    } else if (diceFacet === "d12") {
      let diceValue = Math.floor(Math.random() * 13);
      setDiceRolled(diceValue.toString());
    } else if (diceFacet === "d20") {
      let diceValue = Math.floor(Math.random() * 21);
      setDiceRolled(diceValue.toString());
    } else if (diceFacet === "d100") {
      let diceValue = Math.floor(Math.random() * 101);
      setDiceRolled(diceValue.toString());
    }
  }

  console.log("DICE: ", diceFacet);
  console.log("DICE ROLLED: ", diceRolled);

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
          {apiSimulator.map((item) => (
            <li>
              <strong>{item.user}: </strong>
              {item.diceRolled} | {item.diceValue}
            </li>
          ))}
        </ul>
      </DiceList>
    </Container>
  );
}

export default DiceRoll;
