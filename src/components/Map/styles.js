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
  flex-direction: column;
  justify-content: center;
  position: relative;

  @media (max-width: 425px) {
    min-width: 300px;
    height: auto;
  }

  .select-container {
    display: flex;
    align-items: center;
    gap: 18px;
    margin: 12px 0;

    button {
      width: 120px;
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
    select {
      // A reset of styles, including removing the default dropdown arrow
      appearance: none;
      background-color: transparent;
      border: none;
      padding: 0 1em 0 0;
      margin: 0;
      width: 100%;
      font-family: inherit;
      font-size: inherit;
      cursor: inherit;
      line-height: inherit;
      z-index: 1;
      color: #797979;
      &::-ms-expand {
        display: none;
      }
      outline: none;
    }

    .select {
      display: grid;
      grid-template-areas: "select";
      align-items: center;
      position: relative;

      select,
      &::after {
        grid-area: select;
      }

      min-width: 15ch;
      max-width: 30ch;
      border-radius: 0.25em;
      padding: 0.25em 0.5em;

      font-size: 1.25rem;
      cursor: pointer;
      line-height: 1.1;
      background-color: #fff;
      background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
      color: #797979;
      max-width: 150px;

      // Custom arrow
      &:not(.select--multiple)::after {
        content: "";
        justify-self: end;
        width: 0.55em;
        height: 0.3em;
        background-color: #797979;
        clip-path: polygon(100% 0%, 0 0%, 50% 100%);
      }
    }
    select:focus + .focus {
      max-width: 150px;
      position: absolute;
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      border: 2px solid var(--select-focus);
      border-radius: inherit;
    }

    select[multiple] {
      padding-right: 0;
      height: 6rem;

      option {
        white-space: normal;
        outline-color: var(--select-focus);
      }
    }

    .select--disabled {
      cursor: not-allowed;
      background-color: #eee;
      background-image: linear-gradient(to top, #ddd, #eee 33%);
    }

    .select + label {
      margin-top: 2rem;
    }
  }
`;

export const Mapa = styled.img`
  width: 80%;
  height: 90%;
  border-radius: 8px;
  margin-bottom: 12px;

  @media (max-width: 425px) {
    width: 95%;
  }
`;
