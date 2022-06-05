import styled from 'styled-components';

export const Logo = styled.img`
    width: 5em;
    cursor: pointer; 
    `
export const ButtonAdd = styled.p`
        cursor: pointer; 
    `

export const MainStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Notices = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row: 1fr;
    grid-column-gap: 5px;
    align-self: center;
    width: 80%;
    border: 1px solid black;
    margin-top: 16px;
    height:90em;
    justify-items: stretch;
    @media(min-width: 1740px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }
    @media(min-width: 1026px) and (max-width: 1740px){
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
    }
    @media(max-width: 1026px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }


`
