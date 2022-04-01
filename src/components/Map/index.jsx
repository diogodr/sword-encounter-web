import React, { useState, useEffect } from "react";
import { useCampaign } from "../../contexts/campaignContext";
import api from "../../services/api";
import fileApi from "../../services/fileApi";
import mapDefault from "../../assets/map-white.png";
import checkedIcon from "../../assets/checked.png";
import Loader from "../Loader";
import { Container, Mapa, ContainerMap } from "./styles";
import { useAuth } from "../../contexts/auth";

function Map({ game, selectedPlayer }) {
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
    setSelectedFile(null);
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

  function buildMapGrid() {
    const rows = [];
    for (var r = 1; r < 10; r++) {
      rows.push(<tr id={`r${r}`}>{buildMapColumn(r)}</tr>);
    }
    return rows;
  }

  function buildMapColumn(r) {
    const positions = [];
    if (game && game.characters) {
      game.characters.map((character) => {
        if (character.positions.length > 0) {
          positions.push({
            name: character.attributes[0].value,
            x: character.positions[character.positions.length - 1].xcart,
            y: character.positions[character.positions.length - 1].ycart,
          });
        }
      });
    }

    console.log("POSITIONS:  ", positions);

    const columns = [];
    for (var h = 1; h < 12; h++) {
      const position = positions.find(
        (p) => p.x === r.toString() && p.y === h.toString()
      );

      columns.push(
        <th id={`h${h}`}>
          <div
            id={`${r}-${h}`}
            onClick={(event) => chosePosition(event.target.id)}
          >
            {position ? position.name : ""}
          </div>
        </th>
      );
    }
    return columns;
  }

  async function chosePosition(value) {
    console.log("Char :", selectedPlayer);
    const split = value.split("-");

    const body = {
      xcart: split[0],
      ycart: split[1],
    };
    await api.put(`characters/${selectedPlayer.id}/add-position`, body);
  }

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
              {selectedFile === null ? (
                <span>Subir imagem</span>
              ) : (
                <img src={checkedIcon} alt="icon" />
              )}
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
      <ContainerMap>
        <Mapa src={selectedMap ? selectedMap : mapDefault} alt="mapa" />
        <table className="grade">{buildMapGrid()}</table>
      </ContainerMap>

      {loader && <Loader />}
    </Container>
  );
}

export default Map;
