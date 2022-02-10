import React from "react";
import CampaignForm from "../../components/CampaignForm";

import { Container, Content } from "./styles";

function CreateCampaign() {
  return (
    <Container>
      <Content>
        <CampaignForm />
      </Content>
    </Container>
  );
}

export default CreateCampaign;
