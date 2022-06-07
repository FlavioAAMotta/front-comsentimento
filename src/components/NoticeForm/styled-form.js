import styled from "styled-components"
import { lightBackground } from '../../constants/colors';

export const FormContainer = styled.form`
    margin: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 2fr 1fr 1fr 1fr;
    row-gap: 2px;
    column-gap: 2px;
    background-color: ${lightBackground};
`
export const TitleContainer = styled.input`
    grid-column: 1/-1;
`

export const DescriptionContainer = styled.textarea`
    grid-column: 1/-1;
`

export const ButtonsContainer = styled.div`
    padding-top: 8px;
    grid-column: 1/-1;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

export const SendContainer = styled.button`
    background-color: #5c4cf7;
    border: none;
    color: white;
    padding: 16px 0px;
    width: 128px;
    cursor: pointer;
    `

export const CancelContainer = styled.button`
    background-color: #fa4949;
    border: none;
    color: white;
    padding: 16px 0px;
    width: 128px;
    cursor: pointer;
`

export const CheckField = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const FileField = styled.input`
    align-self: center;
`