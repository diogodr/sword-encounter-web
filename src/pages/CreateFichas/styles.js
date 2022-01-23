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
`;
