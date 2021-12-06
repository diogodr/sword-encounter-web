import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import logo from "../../assets/logo.svg";
import { useState } from "react";
import { Container, Content, Button } from "./styles";

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const context = useAuth();

  function handleLogin(event) {
    event.preventDefault();
    context.Login(email, password);
  }

  return (
    <Container>
      <Content onSubmit={handleLogin}>
        <img src={logo} alt="Sword Encounter" />
        <h2>Login</h2>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="E-mail"
          type="email"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Senha"
          type="password"
        />
        <button>Entrar</button>
        <p>
          Ainda não tem uma conta? <Link to="/cadastro">Crie uma conta</Link>
        </p>
      </Content>
    </Container>
  );
}

export default LoginScreen;
