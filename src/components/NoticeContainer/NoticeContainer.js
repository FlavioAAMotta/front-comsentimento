import {
  Container,
  NoticeTitle,
  NoticeTitleClosed,
  TextContainer,
  DetailsContainer,
  Date,
} from "./styled";
import { Description } from "../Description/Description";
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
          {props.notice.noticeStatus == 1 ? (
            <NoticeTitle onClick={openModal}>
              {props.notice.noticeTitle}
            </NoticeTitle>
          ) : (
            <NoticeTitleClosed onClick={openModal}>
              {props.notice.noticeTitle}
            </NoticeTitleClosed>
          )}
          <Description noticeDescription={props.notice.noticeDescription}>
            {props.notice.noticeDescription}
          </Description>
        </TextContainer>
        <DetailsContainer>
          <Date>{props.notice.noticeOpeningDate}</Date>
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
