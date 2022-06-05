import styled from 'styled-components';
import {lightVariant} from "../../constants/colors"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: ${lightVariant};
    border-radius: 20px;
    padding: 0px 16px;
    width: 30em;
    height: 30em;
    text-align: justify;
    text-justify: inter-word;
     cursor: default;
    /*:hover{
        background-color: lightgray;
    } */
`
export const NoticeTitle = styled.p`
    align-self: center;
    margin-top: -16px;
    font-size: 32px;
`