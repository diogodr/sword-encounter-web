import styled from "styled-components";

import backgroundImg from "../../assets/background-home.png";

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
  width: 400px;
  height: 400px;
  background: #fff;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #797979;
    margin-top: 20px;
  }

  ul {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
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
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;

      :hover {
        background-color: #5aaeca;
      }
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
`;
