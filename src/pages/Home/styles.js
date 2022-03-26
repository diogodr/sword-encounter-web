import styled from "styled-components";

import backgroundImg from "../../assets/background-home.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundImg}) no-repeat bottom center scroll;
  background-position: 30% 45%;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 90px 80px 0 80px;
  gap: 50px;

  @media (max-width: 475px) {
    flex-direction: column;
    gap: 16px;
    padding: 90px 25px 0 25px;
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  height: 80vh;

  @media (max-width: 425px) {
    height: 37vh;
    gap: 10px;
  }
`;

export const Infos = styled.div`
  min-width: 300px;
  height: 18vh;

  background: #fff;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 15px #d3ebed;
  /* opacity: 0.8; */
  border-radius: 12px;
  padding: 18px;

  @media (max-width: 425px) {
    height: 50px;
  }

  a {
    color: #797979;
    text-decoration: none;
  }

  a:hover {
    color: #555555;
    text-shadow: 0px 0px 4px rgb(0 0 0 / 25%);
  }
`;
