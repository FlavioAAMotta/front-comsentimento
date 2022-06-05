import styled from 'styled-components';
import { lightVariant } from "../../constants/colors"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${lightVariant};
    border-radius: 20px;
    padding: 0px 16px;
    cursor: default;    
    width: 27em;
    height: 27em;
`
export const NoticeTitle = styled.p`
    align-self: center;
    margin-top: -16px;
    font-size: 32px;
`

export const DisabledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #C4C2D6;
    border-radius: 20px;
    padding: 0px 16px;  
    width: 27em;
    height: 27em;
    cursor: default;    
`