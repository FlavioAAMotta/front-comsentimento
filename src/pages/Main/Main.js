import React, { useState, useEffect } from "react"
import { NoticeForm } from "../../components/NoticeForm/NoticeForm"
import { MainStyle, Notices, MainContainer } from "./styled"
import { NoticeContainer } from "../../components/NoticeContainer/NoticeContainer"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { ButtonAdd } from "../../components/ButtonAdd/ButtonAdd"
import { goToNoticeDetails, goToMainPageByPage } from "../../routes/coordinator"
import { useNavigate, useParams } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm"
import { addNotice } from "../../endpoints/addNotice"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from '../../constants/urls'

export const Main = () => {
    const pathParams = useParams();
    const { form, onChange } = useForm({
        title: "",
        description: "",
        date: "",
        filePath: "",
        status: false
    });
    const navigate = useNavigate()
    const [url, setUrl] = useState(``)
    const [creatingNotice, setCreatingNotice] = useState(false)
    const [notices, isLoading] = useRequestData(url)

    useEffect(() => {
        const page = pathParams.navPage || 0
        setUrl(`${BASE_URL}/notices?limit=3&offset=${page}`)
    }, [pathParams.navPage])
    if(!pathParams.navPage){
        pathParams.navPage = 0
    }
    const createNotice = () => {
        setCreatingNotice(true)
    }
    const cancelCreation = () => {
        setCreatingNotice(false)
    }

    const onSubmit = async (event) => {
        try {
            event.preventDefault()
            setCreatingNotice(false)
            await addNotice(form)
        } catch (e) {
            console.log(e)
        }
    }

    const handleNoticeClick = (id) => {
        goToNoticeDetails(navigate, id)
    }

    const noticesList = notices && notices.map((notice) => {
        return (
            <>
                <NoticeContainer
                    key={notice.noticeId}
                    handleClick={handleNoticeClick}
                    notice={notice}
                />
            </>)
    })

    const goForth = async () => {
        goToMainPageByPage(navigate, ++pathParams.navPage)
    }
    const goBack = async () => {
        goToMainPageByPage(navigate, --pathParams.navPage)
    }

    const changeStatus = () => {
        form.status = !form.status
    }

    useProtectedPage()
    return (
        <>
            <Header />
            <MainContainer>
                <>{!isLoading && pathParams.navPage != 0 && <ButtonAdd onClick={goBack}>Página anterior </ButtonAdd>}</>
                <MainStyle>
                    {!isLoading && <ButtonAdd onClick={createNotice}>Adicionar edital</ButtonAdd>}
                    <p>Página: {pathParams.navPage}</p>
                    {creatingNotice && <NoticeForm onCancel={cancelCreation} onSubmit={onSubmit} form={form} onChange={onChange} onChangeStatus={changeStatus} />}
                    <hr />
                    <Notices>
                        {isLoading && <p>Carregando...</p>}
                        {!isLoading && notices && noticesList}
                        {!isLoading && notices && notices.length === 0 && (<p>Nada a mostrar</p>)}
                    </Notices>
                </MainStyle>
                {!isLoading && <ButtonAdd onClick={goForth}>Próxima página </ButtonAdd>}
            </MainContainer>
            <Footer />
        </>
    );
}