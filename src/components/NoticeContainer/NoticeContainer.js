import { Container, NoticeTitle, DisabledContainer } from "./styled"
import { Description } from "../Description/Description";
import { Button } from "../../components/ButtonAdd/ButtonAdd"
import { Modal } from "../../components/Modal/Modal"
import React, { useState } from "react"

export const NoticeContainer = (props) => {
    const [showModal, setShowModal] = useState(false);
    
    const handleNoticeClick = () => {
        props.handleClick(props.notice.noticeId);
    }
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
                        <Button onClick={openModal}>Ver Mais</Button>
                        <Modal showModal={showModal} setShowModal={setShowModal} />
                    </Container>
                    :
                    <DisabledContainer>
                        <NoticeTitle>{props.notice.noticeTitle}</NoticeTitle>
                        <hr />
                        <Description noticeDescription={props.notice.noticeDescription}>{props.notice.noticeDescription}</Description>
                        <Button
                            status={props.notice.noticeStatus}
                        />
                    </DisabledContainer>}
        </>
    );
}