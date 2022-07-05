import styled from 'styled-components';
import backgroundImage from '../../images/bkg_solucoes_hosp_clinicas.png'

export const MainContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${backgroundImage});
    background-size: cover;
    height: 100vh;    
`

export const MainStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 400px;
    width: 60%;
    margin:32px 0px;
    border-radius: 25px;
    padding-bottom: 16px;
`

export const Notices = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-flow: row;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 40px;
    grid-row-gap: 80px;
`


export const TitleStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
    font-family: 'Poppins', sans-serif;
    color: white;
`

export const NoticeTitle = styled.p`
    font-size: 48px;
`