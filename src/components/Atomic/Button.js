import styled from 'styled-components';
import {thirdColor, thirdColorVariant} from "../../constants/colors"

const ButtonDesign = styled.p`
    padding: 12px 20px;
    border-radius: 20px;
    align-self: center;
    background-color: ${thirdColorVariant} ;
    cursor: pointer;
    :hover{
        background-color: ${thirdColor};
    }
    border: none;
    display: inline-block;
`

export const Button = (props) => {
    return (
        <ButtonDesign>
            {props.text.toUpperCase()}
        </ButtonDesign>
    );
}