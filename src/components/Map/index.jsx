import React, { useState } from "react";
import { useCampaign } from "../../contexts/campaignContext";
import api from "../../services/api";
import fileApi from "../../services/fileApi";

import { Container, Mapa } from "./styles";

function Map() {
  const [selectedFile, setSelectedFile] = useState(null);
  const contextCampaign = useCampaign();

  async function addMap() {
    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await fileApi.post("/3/image", formData);
    console.log("RESPONSE:", response.data);

    let body = contextCampaign.campaign;
    body.maps.push(response.data.link);
    const response2 = await api.put(
      `/campaigns/${contextCampaign.campaign.id}`,
      body
    );
    console.log(response2);
  }

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
        <input
          type="file"
          // value={selectedFile}
          onChange={(e) => setSelectedFile(e.target.files[0])}
        />
        <button onClick={addMap}>Adicionar mapa</button>
      </div>
      <Mapa
        src="http://3.bp.blogspot.com/-h-OAO9JIMCA/U6SdPf1i8SI/AAAAAAAAAYA/MmCss-Udgig/s1600/10457884_10152470231476071_3391610058143746742_n.jpg"
        alt="mapa"
      />
    </Container>
  );
}

export default Map;
