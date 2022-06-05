import styled from 'styled-components';
export const Logo = styled.img`
    height: 5em;
    cursor: pointer; 
`
export const HeaderDesign = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:#9ea1f1;
    padding: 0px 16px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);
`

export const Login =styled.p`
    border: solid 2px #5c4cf7;
    padding: 0.7em;
    border-radius: 20px;
    color: #fde5bf;
    background-color: #5c4cf7;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    :hover{
        text-decoration-line: none;
        border: solid 1px #5c4cf7;
        padding: 0.9em;
        border-radius: 20px;
        color: #fde5bf;
        box-shadow: 4px 4px 4px #5c4cf7;
        transition: 0.2s all;
    }
`