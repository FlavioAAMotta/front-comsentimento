import styled from 'styled-components';
import { lightVariant } from "../../constants/colors"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px 16px;  
    cursor: default;  
    margin: 8px;
    padding: 16px;
    border: 1px solid black;
`
export const NoticeTitle = styled.h1`
    align-self: center;
    padding: 16px;
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