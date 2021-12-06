import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";

import { Container, Content } from "./styles";

function Campagnes() {
  const [campaigns, setCampagnes] = useState();

  const context = useAuth();

  // Método para chamar campanhas
  useEffect(() => {
    const userId = context.user.id;
    api.get(`campaigns/user/${userId}`).then((response) => {
      setCampagnes(response.data);
    });
    console.log(campaigns);
  }, []);

  return (
    <Container>
      <Content>
        <h2>Campanhas</h2>
        <ul>
          {campaigns?.map((campaign) => (
            <li key={campaign?.id}>{campaign?.name}</li>
          ))}
        </ul>
      </Content>
    </Container>
  );
}

export default Campagnes;
