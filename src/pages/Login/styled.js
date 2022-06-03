import styled from 'styled-components';
import { mainColor } from '../../constants/colors';

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    width: 40vw;
    padding: 20px;
    border: 1px solid ${mainColor};
    border-radius: .5em;
    background-color: white;
    form{
        display: flex;
        flex-direction: column;
        width: 35vw;
    }

@media (max-width: 480px) {
    width: 90vw;
    form {
        width: 80vw;
    }
}
`