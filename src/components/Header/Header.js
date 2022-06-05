import logo from "../../images/comsentimento_horizontal-01.png"
import { Logo, HeaderDesign,Login} from "./styled"
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToMainPage } from "../../routes/coordinator"

export const Header = (props) => {
    const navigate = useNavigate()
    const onClickLogo = () => {
        goToMainPage(navigate)
    }
    const onClickLogin = () => {
        goToLoginPage(navigate)
    }

    return (
        <HeaderDesign>
            <Logo src={logo} onClick={onClickLogo} />
            <Login onClick={onClickLogin}>Login</Login>
        </HeaderDesign>
    );
}