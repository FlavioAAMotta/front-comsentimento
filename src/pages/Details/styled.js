import styled from 'styled-components';
import { mainColor } from '../../constants/colors';

export const CardDetails = styled.div`
    margin: 32px;
    display: flex;
    flex-direction: column;
    align-self: center;
    border: 1px solid ${mainColor};
    padding: 8px 16px;
    width: 60%;
    background-color: white;
    font-size: 18px;
`
export const DetailTitle = styled.p`
    align-self: center;
    margin-bottom: 16px;
    font-size: 32px;
`

export const DetailPage = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
`