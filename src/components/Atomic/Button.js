import styled from 'styled-components';
import {thirdColor, thirdColorVariant} from "../../constants/colors"

const ButtonDesign = styled.p`
    padding: 8px 16px;
    border-radius: 20px;
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