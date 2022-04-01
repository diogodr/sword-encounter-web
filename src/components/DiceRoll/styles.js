import styled from "styled-components";

export const Container = styled.div`
  min-width: 300px;
  background: #fff;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 15px #d3ebed;
  border-radius: 12px;
  position: relative;
  padding: 12px;
  overflow-y: scroll;

  @media (min-height: 890px) {
    height: 460px;
  }

  @media (min-height: 890px) {
    height: 400px;
  }

  @media (min-height: 1024px) {
    height: 60vh;
  }

  label {
    color: #797979;
  }

  div {
    display: flex;
    width: 100%;

    img {
      margin: 12px 0 0 20px;
      width: 30px;
      cursor: pointer;
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
      margin-top: 12px;

      select,
      &::after {
        grid-area: select;
      }

      min-width: 15ch;
      max-width: 30ch;

      /* border: 1px solid var(--select-border); */
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

    label {
      font-size: 1.125rem;
      font-weight: 500;
      color: #797979;
      padding-bottom: 12px;
    }

    .select + label {
      margin-top: 2rem;
      color: #797979;
      font-family: "Prociono";
    }
  }
`;

export const DiceList = styled.div`
  width: 100%;
  margin-top: 16px;

  ul {
    li {
      list-style: none;
      font-size: 13px;
      margin-bottom: 8px;
      color: #797979;
      font-family: "Prociono";
    }
  }
`;
