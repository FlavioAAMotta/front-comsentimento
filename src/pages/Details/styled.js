import styled from 'styled-components';
import { mainColor } from '../../constants/colors';

export const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;
    border: 1px solid ${mainColor};
    padding: 8px 16px;
    width: 80%;
    border-radius: 20px;
    background-color: white;
    font-size: 25px;
`
export const DetailTitle = styled.p`
    align-self: center;
    margin-bottom: 16px;
    font-size: 32px;
`

export const DetailPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`