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
