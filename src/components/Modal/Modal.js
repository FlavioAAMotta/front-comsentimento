import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import {Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton, ModalDescription, ModalPDFButton} from "./styled"

export const Modal = ({ showModal, setShowModal, data }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );
  
  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={require('../../images/comsentimento_simbolo-05.png')} alt='camera' />
              <ModalContent>
                <h1>{data.noticeTitle}</h1>
                <ModalDescription>{data.noticeDescription}</ModalDescription>
                {data.noticeStatus == "0" ?<p>EDITAL ENCERRADO</p> :<p>Abertura: {data.noticeOpeningDate}</p>}
                <ModalPDFButton>{data.noticeStatus == "0" ? <p>Ver PDF (EDITAL ENCERRADO)</p> : <p>Ver PDF</p>}</ModalPDFButton>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};