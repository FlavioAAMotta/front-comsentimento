import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
export const ModalPDFButton = styled.button`
  cursor: pointer;
`;

export const Background = styled.div`
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
top: 0vh;
left: 0vw;
justify-content: center;
align-items: center;
`;

export const ModalWrapper = styled.div`
width: 900px;
height: 500px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
`;

export const ModalImg = styled.img`
width: 100%;
height: 100%;
border-radius: 10px 0 0 10px;
background: #000;
`;
export const ModalDescription = styled.p`
    overflow: auto;
    height: 25vh;
`
export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    padding: 16px;
    text-align: justify;
    p {
        margin-bottom: 1rem;
    }
    button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
    }
`;