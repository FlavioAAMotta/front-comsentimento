import logo from "../../images/comsentimento_horizontal-01.png"
import { Logo, HeaderDesign,Login} from "./styled"

export const Header = (props) => {
    return (
        <HeaderDesign>
            <Logo src={logo} onClick={props.onClick} />
            <Login>Login</Login>
        </HeaderDesign>
    );
}