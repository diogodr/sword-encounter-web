import React, { useState } from "react";
import fileApi from "../../services/fileApi";

import { Container, Mapa } from "./styles";

function Map() {
  const [selectedFile, setSelectedFile] = useState(null);

  function addMap() {
    const formData = new FormData();
    formData.append("image", selectedFile);

    // fetch("https://api.imgur.com/3/image", {
    //   method: "post",
    //   headers: {
    //     Authorization: "Client-ID bceaf7a66e6b3a0",
    //   },
    //   body: formData,
    // })
    //   .then((data) => data.json())
    //   .then((data) => console.log(data));

    //TODO
    // Após receber o response fazer um put para campaigns enviando o id da campanha e adicionando o response,link no body

    const response = fileApi.post("/3/image", formData);
    console.log("RESPONSE:", response.data);
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
