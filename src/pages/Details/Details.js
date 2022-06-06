import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { CardDetails, DetailPage, DetailTitle } from "./styled"
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator"
import { BASE_URL } from "../../constants/urls";
import useRequestData from "../../hooks/useRequestData"

export const Details = () => {
    const pathParams = useParams();
    const navigate = useNavigate()
    const url = `${BASE_URL}/notices/${pathParams.id}`
    const [details, isLoading, error] = useRequestData(url)

    const onBack = () => {
        goBack(navigate)
    }

    const mappedDetails =
        details && <CardDetails>
            <DetailTitle>{details.noticeTitle} </DetailTitle>
            <hr />
            <p>Descrição: {details.noticeDescription}
            </p>
            <p>Data de criação: {details.noticeOpeningDate} </p>
            <p>Caminho: {details.noticePDFDetailsPath} </p>
            <p>Aberto: {details.noticeStatus} </p>
        </CardDetails>

    return (
        <DetailPage>
            <button onClick={onBack}>Voltar</button>
            {isLoading && <p>Carregando...</p>}
            {!isLoading && error && <p>Erro ao carregar detalhes</p>}
            {!isLoading && details && mappedDetails}
            {!isLoading && details && details.length === 0 && (<p>Nada a mostrar</p>)}
        </DetailPage>
    )
}