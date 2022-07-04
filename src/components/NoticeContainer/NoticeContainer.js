import { Container, NoticeTitle, TextContainer, DetailsContainer } from "./styled";
import { Description } from "../Description/Description";
import { ButtonOpen, ButtonClosed } from "../../components/ButtonAdd/ButtonAdd";
import { Modal } from "../../components/Modal/Modal";
import React, { useState } from "react";

export const NoticeContainer = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <>
      <Container>
        <TextContainer>
          <NoticeTitle>{props.notice.noticeTitle}</NoticeTitle>
          <Description noticeDescription={props.notice.noticeDescription}>
            {props.notice.noticeDescription}
          </Description>
        </TextContainer>
        <DetailsContainer>
          {props.notice.noticeStatus == 1 ? (
            <ButtonOpen onClick={openModal}>Ver mais</ButtonOpen>
          ) : (
            <ButtonClosed onClick={openModal}>Encerrado</ButtonClosed>
          )}
          <p>Aberto em: {props.notice.noticeOpeningDate}</p>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            data={props.notice}
          />
        </DetailsContainer>
      </Container>
    </>
  );
};
