import React from "react";

import { Container, Content, Input, AddButton, SubmitButton } from "./styles";

function FichasForm() {
  return (
    <Container>
      <h1>Criação de fichas</h1>
      <Content>
        <Input
          // value={email}
          // onChange={(event) => setEmail(event.target.value)}
          placeholder="Nome"
          type="text"
        />
        <AddButton>Novo Campo</AddButton>
        <SubmitButton>Finalizar</SubmitButton>
      </Content>
    </Container>
  );
}

export default FichasForm;
