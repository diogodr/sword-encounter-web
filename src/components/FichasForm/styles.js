import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    margin: 20px 0;
    color: #797979;
  }
`;

export const Content = styled.form`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 50%;
  height: 100%;
  margin-left: 20px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #797979;
  background: transparent;
  width: 100%;
  padding-left: 8px;
  font-family: "Prociono";
  margin-top: 20px;

  :focus {
    outline: none;
    border-bottom: 2px solid #8ac1d3;
  }
`;

export const AddButton = styled.button`
  width: 150px;
  height: 33px;
  background: #8ac1d3;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  font-family: "Prociono";
  transition: background-color 0.2s;
  margin: 20px 0;

  :hover {
    background-color: #5aaeca;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin: 0 auto;
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
`;
