import styled from 'styled-components';

export const ButtonAdd =styled.p`
    margin-top: 16px;
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

export const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Notices = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-around;
    width: 80%;
    margin-top: 16px;
    @media(min-width: 1740px) {
        flex-direction: row;
    }
    @media(min-width: 1026px) and (max-width: 1664px){
        flex-direction: column;
    }


`
