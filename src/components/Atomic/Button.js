import styled from 'styled-components';
import { secondColor } from "../../constants/colors"

const OpenColor = styled.nav`
    padding: 12px 20px;
    font-size: 12px;
    align-self: center;
    cursor: pointer;
    :hover{
        color: ${secondColor};
    }
    border: none;
    display: inline-block;
    color: white;
;`
const FinishedColor = styled.nav`
    background-color: #D51621;
    font-size: 12px;
    padding: 12px 20px;
    align-self: center;
    border: none;
    display: inline-block;
    color: white;
;`

export const Button = (props) => {
    return (
        <>
            {props.status == 0 ?
                <FinishedColor>
                    ENCERRADO
                </FinishedColor>
                :
                <OpenColor onClick={props.onClick}>
                    VER MAIS
                </OpenColor>
            }
        </>
    );
}