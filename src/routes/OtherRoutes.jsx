import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Campagnes from "../pages/Campagnes";
import Images from "../pages/Images";
import Ficha from "../pages/Ficha";
import CreateFichas from "../pages/CreateFichas";
import Header from "../components/Header";
import Home from "../pages/Home";
import TodasAsFichas from "../pages/TodasAsFichas";
import CreateCampaign from "../pages/CreateCampaign";
import { useAuth } from "../contexts/auth";

function OtherRoutes() {
  const authContext = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Campagnes />} />
        <Route path="/dashboard" element={<Home />} />
        <Route path="/imagens" element={<Images />} />
        <Route path="/ficha" element={<Ficha />} />
        <Route path="/ficha/:charId" element={<Ficha />} />
        <Route path="/todas-as-fichas" element={<TodasAsFichas />} />
        <Route path="/criar-fichas" element={<CreateFichas />} />
        <Route path="/criar-campanhas" element={<CreateCampaign />} />
      </Routes>
      <Header />
    </BrowserRouter>
  );
}

export default OtherRoutes;
