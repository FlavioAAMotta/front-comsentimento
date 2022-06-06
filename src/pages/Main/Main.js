import React, { useState, useEffect } from "react"
import { NoticeForm } from "../../components/NoticeForm/NoticeForm"
import { MainStyle, Notices } from "./styled"
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
    const [page, setPage] = useState(1)
    const [url, setUrl] = useState(``)
    const [creatingNotice, setCreatingNotice] = useState(false)
    const [notices, isLoading] = useRequestData(url)

    useEffect(() => {
        console.log(pathParams.navPage)
        setUrl(`${BASE_URL}/notices?limit=4&offset=${pathParams.navPage}`)
    }, [pathParams.navPage])

    useEffect(() => {
        setUrl(`${BASE_URL}/notices?limit=4&offset=0`)
    }, [])

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

    const loadMore = async () => {
        goToMainPageByPage(navigate, ++pathParams.navPage)
        //setUrl(`${BASE_URL}/notices?limit=4&offset=${page}`)
    }

    const changeStatus = () => {
        form.status = !form.status
    }

    useProtectedPage()
    return (
        <>
            <Header />
            <MainStyle>
                <ButtonAdd onClick={createNotice}>Adicionar edital</ButtonAdd>
                {creatingNotice && <NoticeForm onCancel={cancelCreation} onSubmit={onSubmit} form={form} onChange={onChange} onChangeStatus={changeStatus} />}
                <hr />
                <Notices>
                    {isLoading && <p>Carregando...</p>}
                    {!isLoading && notices && noticesList}
                    {!isLoading && notices && notices.length === 0 && (<p>Nada a mostrar</p>)}
                </Notices>
                <ButtonAdd onClick={loadMore}>Próxima página </ButtonAdd>
            </MainStyle>
            <Footer />
        </>
    );
}