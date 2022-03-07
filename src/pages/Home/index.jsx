import React from "react";
import DiceRoll from "../../components/DiceRoll";
import Map from "../../components/Map";
import { useAuth } from "../../contexts/auth";

import { Container, Content, RightSide, Infos } from "./styles";

function Home() {
  const contextAuth = useAuth();

  return (
    <>
      <Container>
        <Content>
          <Map />
          <RightSide>
            <Infos>
              {contextAuth.isMaster ? (
                <a href="/todas-as-fichas">Todas as fichas</a>
              ) : (
                <a href="/ficha">Ficha</a>
              )}
            </Infos>
            <DiceRoll />
          </RightSide>
        </Content>
      </Container>
    </>
  );
}

export default Home;
