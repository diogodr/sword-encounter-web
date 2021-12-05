import styled from "styled-components";

import backgroundImg from "../../assets/background-login.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundImg}) no-repeat bottom center scroll;
  background-position: 30% 45%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.form`
  width: 300px;
  height: 300px;
  background: #fff;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.9);
  /* opacity: 0.8; */
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    color: #797979;
  }

  input {
    border: none;
    border-bottom: 1px solid #797979;
    background: transparent;
    width: 70%;
    padding-left: 8px;
    font-family: "Prociono";

    :focus {
      outline: none;
      border-bottom: 2px solid #8ac1d3;
    }
  }

  button {
    width: 70%;
    height: 33px;
    background: #8ac1d3;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    font-family: "Prociono";
    transition: background-color 0.2s;

    :hover {
      background-color: #5aaeca;
    }
  }

  p {
    color: #797979;
    font-size: 12px;
    margin-bottom: 30px;
    font-family: "Prociono";

    a {
      text-decoration: none;
      color: #8ac1d3;
      cursor: pointer;
      transition: background-color 0.2s;

      :hover {
        color: #279bc0;
      }
    }
  }
`;
