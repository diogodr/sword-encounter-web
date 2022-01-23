import React from "react";

import { Container, Grade, Mapa } from "./styles";

import imgGrade from "../../assets/grade.svg";

function Map() {
  return (
    <Container>
      <Mapa
        src="http://3.bp.blogspot.com/-h-OAO9JIMCA/U6SdPf1i8SI/AAAAAAAAAYA/MmCss-Udgig/s1600/10457884_10152470231476071_3391610058143746742_n.jpg"
        alt="mapa"
      />
      <Grade src={imgGrade} alt="grade" />
    </Container>
  );
}

export default Map;
