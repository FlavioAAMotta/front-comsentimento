import React, { useState, useContext } from "react"
import { RuleForm } from "../../components/RuleForm/RuleForm"
import GlobalStateContext from "../../global/GlobalStateContext"
import {NoticeContainer, MainStyle, Logo} from "./styled"
import logo from "../../images/comsentimento_simbolo-01.png"
import { goToHomePage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"

export const Main = () => {
    const [creatingRule, setCreatingRule] = useState(false)
    const { data } = useContext(GlobalStateContext);
    const navigate = useNavigate()

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

    const onClickLogo = ()=>{
        goToHomePage(navigate)
    }


    useProtectedPage()
    return (
        <MainStyle>
            <div>
                <Logo src={logo} onClick={onClickLogo}/>
            </div>
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