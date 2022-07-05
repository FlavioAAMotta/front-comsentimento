import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: default;  
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7);
`

export const NoticeTitle = styled.p`
    font-weight: bold;
    color: #044cbc;
    font-size: 26px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
`

export const NoticeTitleClosed = styled.p`
    font-weight: bold;
    color: red;
    font-size: 26px;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;    
`

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

export const TextContainer =  styled.div`
    display: flex;
    flex-direction: column;
    min-width: 220px;
    max-width: 550px;
    justify-content: space-around;
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 180px;
    align-items: center;
    align-self: flex-end;
`

export const Date = styled.p`
    align-self: flex-end;
`