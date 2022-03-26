import React, { useState, useEffect } from "react";
import { useCampaign } from "../../contexts/campaignContext";
import api from "../../services/api";
import fileApi from "../../services/fileApi";
import mapDefault from "../../assets/map-white.png";
import Loader from "../Loader";
import { Container, Mapa } from "./styles";
import { useAuth } from "../../contexts/auth";

function Map() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [maps, setMaps] = useState([]);
  const [selectedMap, setSelectedMap] = useState("");
  const contextCampaign = useCampaign();
  const [loader, setLoader] = useState(false);
  const contextAuth = useAuth();

  async function addMap() {
    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await fileApi.post("/3/image", formData);

    const body = contextCampaign.campaign;
    body.maps.push(response.data.data.link);

    await api.put(`/campaigns/${contextCampaign.campaign.id}`, body);
  }

  async function getGameController() {
    setLoader(true);
    const response = await api.get(`/game/${contextCampaign.campaign.id}`);
    setMaps(response.data.campaign.maps);
    setLoader(false);
  }

  useEffect(() => {
    getGameController();
  }, []);

  return (
    <Container>
      <div className="select-container">
        <div className="select">
          <select
            id="standard-select"
            value={selectedMap}
            onChange={(e) => setSelectedMap(e.target.value)}
          >
            {maps.map((map, index) => (
              <option key={map} value={map}>
                Mapa {index}
              </option>
            ))}
          </select>
          <span className="focus"></span>
        </div>
        {contextAuth.isMaster && (
          <>
            <label className="label-image" for="arquivo">
              Subir imagem
            </label>
            <input
              name="arquivo"
              id="arquivo"
              type="file"
              // value={selectedFile}
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
            <button onClick={addMap}>Adicionar mapa</button>
          </>
        )}
      </div>
      <Mapa src={selectedMap ? selectedMap : mapDefault} alt="mapa" />
      {loader && <Loader />}
    </Container>
  );
}

export default Map;
