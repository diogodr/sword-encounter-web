import React from "react";
import DiceRoll from "../../components/DiceRoll";
import Map from "../../components/Map";

import { Container, Content } from "./styles";

function Home() {
  return (
    <>
      <Container>
        <Content>
          <Map />
          <DiceRoll />
        </Content>
      </Container>
    </>
  );
}

export default Home;
