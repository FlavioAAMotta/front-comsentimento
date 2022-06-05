import React, { useState, useEffect } from 'react';
import { getNoticeDetails } from "../../services/details"
import { useParams } from "react-router-dom"
import { CardDetails, DetailPage, DetailTitle } from "./styled"

export const Details = () => {
    const pathParams = useParams();
    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(false)
    const [showMore, setShowMore] = useState(false)

    useEffect(() => {
        const getDetails = async () => {
            try {
                setLoading(true)
                const detailsFromNotice = await getNoticeDetails(pathParams.id)
                console.log(detailsFromNotice)
                setDetails(detailsFromNotice)
                console.log(details)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getDetails()
    }, []);

    const changeButtonVisibility = () => {
        setShowMore(!showMore)
    }

    const mappedDetails = 
            <CardDetails>
                <DetailTitle>Título{details.noticeTitle} </DetailTitle>
                <hr/>
                <p>Descrição: 
                    {showMore ? details.noticeDescription : `${details.noticeDescription.substring(0,250)}`} 
                    
                    <button onClick={changeButtonVisibility}>
                        {showMore ? "Mostrar menos" : "Mostrar mais"}
                    </button></p>
                <p>Data de criação: {details.noticeOpeningDate} </p>
                <p>Caminho: {details.noticePDFDetailsPath} </p>
                <p>Aberto: {details.noticeStatus} </p>
            </CardDetails>
            
    return (
        <DetailPage>
            Detalhe
            {loading || mappedDetails}
        </DetailPage>
    )
}