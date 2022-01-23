import styled from "styled-components";

export const Container = styled.div`
  min-width: 700px;
  width: 100%;
  height: 80vh;
  overflow: hidden;

  background: #fff;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 15px #d3ebed;
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Grade = styled.img`
  position: absolute;
  width: 100%;
`;

export const Mapa = styled.img`
  width: 80%;
  height: 90%;
  border-radius: 8px;
`;
