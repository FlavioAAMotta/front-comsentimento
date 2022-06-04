import styled from "styled-components"

export const FormContainer = styled.form`
    margin: 1rem;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    max-width: 40rem;
    width: 100%;
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    input {
        width: 100%;
    }
`

export const CheckField = styled.div`
    display: flex;
    flex-direction: row;
    width: 10%;
    align-items: center;
`