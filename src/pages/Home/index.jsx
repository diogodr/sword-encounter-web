import React from "react";
import Chat from "../../components/Chat";
import Map from "../../components/Map";

import { Container, Content } from "./styles";

function Home() {
  return (
    <>
      <Container>
        <Content>
          <Map />
          <Chat />
        </Content>
      </Container>
    </>
  );
}

export default Home;
