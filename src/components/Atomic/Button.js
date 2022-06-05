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
    cursor: not-allowed;
    border: none;
    display: inline-block;
;`

export const Button = (props) => {
    return (
        <>
            {props.status == 0 ?
                <FinishedColor>
                    ENCERRADO
                </FinishedColor>
                :
                <OpenColor>
                    VER MAIS
                </OpenColor>
            }
        </>
    );
}