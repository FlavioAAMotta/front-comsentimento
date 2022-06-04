import React, { useState, useEffect } from 'react';
import { getNoticeDetails } from "../../services/details"
import { useParams } from "react-router-dom"

export const Details = () => {
    const pathParams = useParams();
    const [details, setDetails] = useState({})
    const [loading, setLoading] = useState(false)

    

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

    const mappedDetails = 
            <>
                <p>{details.noticeDescription} </p>
                <p>{details.noticeId} </p>
                <p>{details.noticeOpeningDate} </p>
                <p>{details.noticePDFDetailsPath} </p>
                <p>{details.noticeStatus} </p>
                <p>{details.noticeTitle} </p>
            </>
            
    const imprime = () => {
        console.log(details)
    }
    return (
        <>
            Detalhe
            <button onClick={imprime}>console</button>
            {loading || mappedDetails}
        </>
    )
}