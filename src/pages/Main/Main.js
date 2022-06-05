import React, { useState, useContext } from "react"
import { RuleForm } from "../../components/RuleForm/RuleForm"
import GlobalStateContext from "../../global/GlobalStateContext"
import { MainStyle, ButtonAdd, Notices } from "./styled"
import { NoticeContainer } from "../../components/NoticeContainer/NoticeContainer"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { goToMainPage, goToNoticeDetails } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm"
import { addNotice } from "../../services/addNotice"

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

    const handleNoticeClick = (id) => {
        goToNoticeDetails(navigate, id)
    }

    const mapNotices = data.notices.map((notice) => {
        return (
            <>
                <NoticeContainer
                    key={notice.noticeId}
                    handleClick={handleNoticeClick}
                    notice={notice}
                />
            </>)
    })
    const changeStatus = () => {
        form.status = !form.status
    }
    useProtectedPage()
    return (
        <>
            <Header onClick={onClickLogo} />
            <MainStyle>
                <ButtonAdd onClick={createRule}>Adicionar edital</ButtonAdd>
                {creatingRule && <RuleForm onCancel={cancelCreation} onSubmit={onSubmit} form={form} onChange={onChange} onChangeStatus={changeStatus} />}
                <hr />
                <Notices>
                    {data.notices &&
                        mapNotices}
                </Notices>
            </MainStyle>
            <Footer />
        </>
    );
}