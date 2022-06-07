import { Container, NoticeTitle, DisabledContainer } from "./styled"
import { Description } from "../Description/Description";
import { ButtonOpen, ButtonClosed } from "../../components/ButtonAdd/ButtonAdd"
import { Modal } from "../../components/Modal/Modal"
import React, { useState } from "react"

export const NoticeContainer = (props) => {
    const [showModal, setShowModal] = useState(false);
    
    const openModal = () => {
        setShowModal(prev => !prev);
    };
    return (
        <>
            {
                props.notice.noticeStatus == 1 ?
                    <Container>
                        <NoticeTitle>{props.notice.noticeTitle}</NoticeTitle>
                        <hr />
                        <Description noticeDescription={props.notice.noticeDescription}>{props.notice.noticeDescription}</Description>
                        <ButtonOpen onClick={openModal}>Ver Mais</ButtonOpen>
                        <Modal showModal={showModal} setShowModal={setShowModal} data={props.notice} />
                    </Container>
                    :
                    <DisabledContainer>
                        <NoticeTitle>{props.notice.noticeTitle}</NoticeTitle>
                        <hr />
                        <Description noticeDescription={props.notice.noticeDescription}>{props.notice.noticeDescription}</Description>
                        <ButtonClosed onClick={openModal}>Encerrado</ButtonClosed>
                        <Modal showModal={showModal} setShowModal={setShowModal} data={props.notice} />
                    </DisabledContainer>}
        </>
    );
}