import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  background: #000;
  opacity: 0.7;
  left: 0;
  top: 0;
`;

export const LoaderImg = styled.img`
  width: 60px;
  height: 60px;
`;
