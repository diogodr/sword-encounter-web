import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAccount from "../pages/CreateAccount";
import LoginScreen from "../pages/LoginScreen";

function SignRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/cadastro" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default SignRoutes;
