import styled from 'styled-components';
import { lightVariant } from "../../constants/colors"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px 16px;  
    height: 14vh;
    cursor: default;  
    margin: 16px 0px;
    background-color: ${lightVariant};
    background-color: "#001100";
`
export const NoticeTitle = styled.p`
    align-self: center;
    font-size: 25px;
`

export const DisabledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 8px 16px;  
    height: 14vh;
    cursor: default;  
    margin: 16px 0px;  
    background-color: #C4C2D6;
`

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`