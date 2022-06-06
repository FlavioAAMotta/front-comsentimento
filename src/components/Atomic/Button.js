import styled from 'styled-components';
import { thirdColor, thirdColorVariant } from "../../constants/colors"

const OpenColor = styled.nav`
    background-color: ${thirdColorVariant};
    padding: 12px 20px;
    border-radius: 20px;
    align-self: center;
    cursor: pointer;
    :hover{
        background-color: ${thirdColor};
    }
    border: none;
    display: inline-block;
;`
const FinishedColor = styled.nav`
    background-color: #D51621;
    padding: 12px 20px;
    border-radius: 20px;
    align-self: center;
    border: none;
    display: inline-block;
;`

export const Button = (props) => {
    return (
        <>
            {props.status == "false" ?
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