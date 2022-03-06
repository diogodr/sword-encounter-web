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

export const Content = styled.div`
  margin-top: 80px;
  height: 85%;
  width: 80%;
  max-width: 890px;
  background: #fff;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 15px #d3ebed;
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 20px 0;
    color: #797979;
  }

  > div {
    width: 80%;
    margin-top: 50px;
    display: flex;

    .listChar {
      width: 80%;
      display: flex;
      flex-direction: column;
      a {
        margin-bottom: 12px;
        color: #797979;
      }
    }

    .addChar {
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        width: 100px;
        background: #8ac1d3;
        border-radius: 5px;
        border: none;
        color: #fff;
        font-size: 16px;
        cursor: pointer;
        font-family: "Prociono";
        transition: background-color 0.2s;
        margin: 20px 0;
        padding: 10px;
        text-decoration: none;
        text-align: center;

        :hover {
          background-color: #5aaeca;
        }
      }
    }
  }
`;
