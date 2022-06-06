import React, { useState, useEffect } from 'react';
import { getNoticeDetails } from "../../endpoints/details"
import { useParams } from "react-router-dom"
import { CardDetails, DetailPage, DetailTitle } from "./styled"
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator"

export const Details = () => {
    const pathParams = useParams();
    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        const getDetails = async () => {
            try {
                setLoading(true)
                const detailsFromNotice = await getNoticeDetails(pathParams.id)
                setDetails(detailsFromNotice)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getDetails()
    }, []);

    const onBack = () => {
        goBack(navigate)
    }

    const mappedDetails = 
            <CardDetails>
                <DetailTitle>{details.noticeTitle} </DetailTitle>
                <hr/>
                <p>Descrição: {details.noticeDescription}
                    </p>
                <p>Data de criação: {details.noticeOpeningDate} </p>
                <p>Caminho: {details.noticePDFDetailsPath} </p>
                <p>Aberto: {details.noticeStatus} </p>
            </CardDetails>
            
    return (
        <DetailPage>
            <button onClick={onBack}>Voltar</button>
            {loading || mappedDetails}
        </DetailPage>
    )
}