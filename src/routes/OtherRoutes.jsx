import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Campagnes from "../pages/Campagnes";
import Images from "../pages/Images";
import Fichas from "../pages/Fichas";

function OtherRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Campagnes />} />
        <Route path="/imagens" element={<Images />} />
        <Route path="/fichas" element={<Fichas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default OtherRoutes;
