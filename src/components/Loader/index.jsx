import React from "react";

import loaderGif from "../../assets/loader.gif";

import { LoaderContainer, LoaderImg } from "./styles";

function Loader() {
  return (
    <LoaderContainer>
      <LoaderImg src={loaderGif} alt="loader" />
    </LoaderContainer>
  );
}

export default Loader;
