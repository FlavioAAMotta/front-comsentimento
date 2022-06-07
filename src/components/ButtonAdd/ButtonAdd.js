import styled from 'styled-components';
export const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  background-color: #5c4cf7;
  color: white;
  font-size: 24px;
  cursor: pointer;
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
    :hover{
        text-decoration-line: none;
        border: solid 1px #5c4cf7;
        padding: 0.9em;
        border-radius: 10px;
        color: #fde5bf;
        box-shadow: 1px 1px 1px #5c4cf7;
        transition: 0.2s all;
    }
`
export const NavigationButton = styled.p`
    margin: 40px;
    padding: 1em;
    border-radius: 90px;
    color: #5c4cf7;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    background-color: #ddd;
    cursor: pointer;
    :hover{
        text-decoration-line: none;
        background-color: #5c4cf7;
        border-radius: 10px;
        color: #fde5bf;
        box-shadow: 1px 1px 1px #5c4cf7;
        transition: 0.2s all;
    }
`