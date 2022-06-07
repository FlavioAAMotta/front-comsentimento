import React, { useState, useEffect, useContext } from "react"
import { NoticeForm } from "../../components/NoticeForm/NoticeForm"
import { MainStyle, Notices, MainContainer } from "./styled"
import { NoticeContainer } from "../../components/NoticeContainer/NoticeContainer"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { ButtonAdd, NavigationButton, Button } from "../../components/ButtonAdd/ButtonAdd"
import { goToNoticeDetails, goToMainPageByPage } from "../../routes/coordinator"
import { useNavigate, useParams } from "react-router-dom";
import useForm from "../../hooks/useForm"
import { addNotice } from "../../endpoints/addNotice"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from '../../constants/urls'
import GlobalStateContext from "../../global/GlobalStateContext";

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
    const { data } = useContext(GlobalStateContext);


    useEffect(() => {
        const page = pathParams.navPage || 0
        setUrl(`${BASE_URL}/notices?limit=3&offset=${page}`)
    }, [pathParams.navPage])

    if (!pathParams.navPage) {
        pathParams.navPage = 0
    }
    const createNotice = () => {
        form.filePath = ""
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
            document.location.reload(true);
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
        if (pathParams.navPage <= 0) {
            alert("Essa é a página mais atual")
            pathParams.navPage = 0
        } else {
            goToMainPageByPage(navigate, --pathParams.navPage)
        }
    }

    const changeStatus = () => {
        form.status = !form.status
    }

    return (
        <>
            <Header />
            <MainContainer>
                {!creatingNotice && !isLoading && data.loggedIn && <ButtonAdd onClick={createNotice}>Adicionar edital</ButtonAdd>}
                {creatingNotice && <NoticeForm onCancel={cancelCreation} onSubmit={onSubmit} form={form} onChange={onChange} onChangeStatus={changeStatus} />}
                <MainStyle>
                    <>{!isLoading && <NavigationButton onClick={goBack}> &lt; </NavigationButton>}</>
                    <hr />
                    <Notices>
                        {isLoading && <p>Carregando...</p>}
                        {!isLoading && notices && noticesList}
                        {!isLoading && notices && notices.length === 0 && (<p>Nada a mostrar</p>)}
                    </Notices>
                    {!isLoading && notices && <NavigationButton onClick={goForth}> &gt; </NavigationButton>}
                </MainStyle>
                <p>PÁGINA: {pathParams.navPage}</p>
            </MainContainer>
            <Footer />
        </>
    );
}