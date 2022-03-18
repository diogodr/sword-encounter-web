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

  @media (max-width: 425px) {
    margin: 20px;
  }

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
      justify-content: space-between;
      margin-bottom: 12px;
      padding: 0 9px;

      @media (max-width: 425px) {
        font-size: 13px;
      }

      .container-icons {
        display: flex;
        align-items: center;
        gap: 8px;
        .trash-icon {
          width: 20px;
        }
      }

      a {
        text-decoration: none;
        color: #fff;

        img {
          width: 20px;
        }
      }

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

export const CreateCampaignButton = styled.a`
  position: absolute;
  top: 100px;
  right: 200px;
  width: 100px;
  height: 100px;
  background: #8ac1d3;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  font-family: "Prociono";
  transition: background-color 0.2s;
  margin: 20px 0;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  :hover {
    background-color: #5aaeca;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;
