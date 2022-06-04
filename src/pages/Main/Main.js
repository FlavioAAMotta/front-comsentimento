import React, { useState, useContext } from "react"
import { RuleForm } from "../../components/RuleForm/RuleForm"
import GlobalStateContext from "../../global/GlobalStateContext"
import {NoticeContainer, MainStyle} from "./styled"

export const Main = () => {
    const [creatingRule, setCreatingRule] = useState(false)
    const { data } = useContext(GlobalStateContext);

    const createRule = () => {
        setCreatingRule(true)
    }

    const cancelCreation = () => {
        setCreatingRule(false)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        setCreatingRule(false)
    }



    return (
        <MainStyle>
            <h2>Olá</h2>
            <p onClick={createRule}>Adicionar edital</p>
            {creatingRule && <RuleForm onCancel={cancelCreation} onSubmit={onSubmit} />}
            <hr />
            {data.notices &&
                data.notices.map((notice) => {
                    return <NoticeContainer>
                        <p>{notice.noticeTitle}</p>
                        <p>{notice.noticeDescription}</p>
                        <p>{notice.noticeOpeningDate}</p>
                        <p>{notice.noticePDFDetailsPath}</p>
                        <p>{notice.noticeStatus}</p>
                    </NoticeContainer>;
                })}
        </MainStyle>
    );
}