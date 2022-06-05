import styled from 'styled-components';
import { lightVariant } from "../../constants/colors"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 10px;
    padding: 8px 16px;  
    height: 10em;
    cursor: default;  
    margin: 16px 0px;
    background-color: ${lightVariant};
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
    border-radius: 10px;
    padding: 8px 16px;  
    height: 10em;
    cursor: default;  
    margin: 16px 0px;  
    background-color: #C4C2D6;
    border: 2px solid red;
`