import styled from 'styled-components';
import { lightVariant } from "../../constants/colors"

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: default;  
    border-bottom: 1px solid grey;
    margin-bottom: 22px;
    flex-wrap: wrap;
`
export const NoticeTitle = styled.p`
    font-weight: bold;
    font-size: 18px;
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
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 180px;
    align-items: center;
    align-self: flex-end;
`