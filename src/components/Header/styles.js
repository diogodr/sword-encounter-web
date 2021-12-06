import styled from "styled-components";

export const Container = styled.div`
  height: 66px;
  width: 100%;
  background: rgba(249, 254, 255, 0.92);
  box-shadow: 0px 0px 15px #d3ebed;
  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;

  @media (max-width: 425px) {
    padding: 0 20px;
  }

  .logo-header {
    margin-bottom: 15px;
  }

  .profile-container {
    display: flex;
    align-items: center;
    gap: 20px;
    position: relative;

    p {
      color: #797979;
      font-size: 14px;
      font-family: "Prociono";
    }

    img {
      cursor: pointer;
    }

    div {
      position: absolute;
      width: 201px;
      height: 174px;
      left: -20px;
      top: 35px;
      background: #fdffff;
      box-shadow: 0px 0px 15px #d3ebed;
      border-radius: 21px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      transition: 0.2s;

      a {
        color: #797979;
        font-size: 16px;
        font-family: "Prociono";
        text-decoration: none;
        margin-left: 24px;
        transition: all 0.2s;

        :hover {
          color: #555555;
          text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
        }
      }
    }

    .isHidden {
      display: none;
    }
  }
`;
