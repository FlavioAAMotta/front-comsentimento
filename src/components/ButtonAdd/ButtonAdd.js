import styled from "styled-components";

export const ButtonOpen = styled.button`
  background-color: white;
  min-width: 100px;
  padding: 6px 20px;
  border-radius: 4px;
  border: 1px solid #044cbc;
  font-size: 14px;
  color: #044cbc;
  cursor: pointer;
  max-width: 150px;
  align-self: center;
  :hover {
    text-decoration-line: none;
    background-color: #5c4cf7;
    color: white;
    transition: 0.2s all;
  }
`;

export const ButtonClosed = styled.button`
  background-color: white;
  min-width: 100px;
  padding: 6px 20px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  color: #fa4949;
  cursor: pointer;
  max-width: 150px;
  align-self: center;
  border: 1px solid #fa4949;
  :hover {
    text-decoration-line: none;
    background-color: #fa4949;
    color: white;
    transition: 0.2s all;
  }
`;

export const ButtonAdd = styled.p`
  margin: 16px 64px;
  border: solid 2px #5c4cf7;
  padding: 0.7em;
  border-radius: 10px;
  color: #fde5bf;
  background-color: #5c4cf7;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  :hover {
    text-decoration-line: none;
    border: solid 1px #5c4cf7;
    padding: 0.9em;
    border-radius: 10px;
    color: #fde5bf;
    box-shadow: 1px 1px 1px #5c4cf7;
    transition: 0.2s all;
  }
`;
export const NavigationButton = styled.p`
  margin: 40px;
  padding: 1em;
  border-radius: 90px;
  color: #5c4cf7;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  background-color: white;
  cursor: pointer;
  :hover {
    text-decoration-line: none;
    background-color: #5c4cf7;
    border-radius: 45px;
    color: #fde5bf;
    box-shadow: 1px 1px 1px #5c4cf7;
    transition: 0.2s all;
  }
`;
