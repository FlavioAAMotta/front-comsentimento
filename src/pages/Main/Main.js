import React, { useState, useEffect } from "react"
import { NoticeForm } from "../../components/NoticeForm/NoticeForm"
import { MainStyle, ButtonAdd, Notices } from "./styled"
import { NoticeContainer } from "../../components/NoticeContainer/NoticeContainer"
import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { goToNoticeDetails } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import useForm from "../../hooks/useForm"
import { addNotice } from "../../endpoints/addNotice"
import { getNotice } from "../../endpoints/getNotice"

export const Main = () => {
    const { form, onChange } = useForm({
        title: "",
        description: "",
        date: "",
        filePath: "",
        status: false
    });
    const [creatingNotice, setCreatingNotice] = useState(false)
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(0)
    const [notices, setNotices] = useState([])
    const navigate = useNavigate()

    const getNotices = async (page) => {
        try {
            setLoading(true)
            const fetchNotice = await getNotice(page)
            addNewNotices(fetchNotice)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setLoading(true)
        getNotices(0)
        setLoading(false)
    }, [])

    const addNewNotices = (newNotices) => {
        if (notices.length > 0) {
            const updatedNotices = [...notices, newNotices].flat()
            setNotices(updatedNotices)
        }else {
            setNotices(newNotices);
        }
    };

    const loadMore = async () => {
        try {
            console.log(page)
            setPage(page + 1)
            getNotices(page)
        } catch (error) {
            console.log(error.message)
        }
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

    const mapNotices = notices.map((notice) => {
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
            <Header />
            <MainStyle>
                <ButtonAdd onClick={createNotice}>Adicionar edital</ButtonAdd>
                {creatingNotice && <NoticeForm onCancel={cancelCreation} onSubmit={onSubmit} form={form} onChange={onChange} onChangeStatus={changeStatus} />}
                <hr />
                <Notices>
                    {notices && mapNotices}
                </Notices>
                <ButtonAdd onClick={loadMore}>
                    {loading ? "Carregando..." : "Carregar mais"}
                </ButtonAdd>
            </MainStyle>
            <Footer />
        </>
    );
}