import React, { useState, useContext } from "react"
import { RuleForm } from "../../components/RuleForm/RuleForm"
import GlobalStateContext from "../../global/GlobalStateContext"
import { NoticeContainer, MainStyle, Logo, ButtonAdd } from "./styled"
import logo from "../../images/comsentimento_simbolo-01.png"
import { goToMainPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm"
import {addNotice} from "../../services/addNotice"

export const Main = () => {
    const { form, onChange, clear } = useForm({
        title: "",
        description: "",
        date: "",
        filePath: "",
        status: false
    });
    const [creatingRule, setCreatingRule] = useState(false)
    const { data } = useContext(GlobalStateContext);
    const navigate = useNavigate()

    const createRule = () => {
        setCreatingRule(true)
    }

    const cancelCreation = () => {
        setCreatingRule(false)
    }

    const onSubmit = async (event) => {
        try {
            event.preventDefault()
            setCreatingRule(false)
            await addNotice(form)
        } catch (e) {
            console.log(e)
        }
    }

    const onClickLogo = () => {
        goToMainPage(navigate)
    }

    useProtectedPage()
    return (
        <MainStyle>
            <header>
                <Logo src={logo} onClick={onClickLogo} />
            </header>

            <ButtonAdd onClick={createRule}>Adicionar edital</ButtonAdd>
            {creatingRule && <RuleForm onCancel={cancelCreation} onSubmit={onSubmit} form={form} onChange={onChange} />}
            <hr />
            {data.notices &&
                data.notices.map((notice) => {
                    return <NoticeContainer key={notice.noticeId}>
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