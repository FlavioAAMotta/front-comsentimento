import logo from "../../images/comsentimento_horizontal-01.png"
import { Logo, HeaderDesign, Login } from "./styled"
import React, { useContext, useEffect,useState } from "react"
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToMainPageByPage } from "../../routes/coordinator"
import GlobalStateContext from "../../global/GlobalStateContext";

export const Header = (props) => {
    const navigate = useNavigate()
    const { data } = useContext(GlobalStateContext);
    const onClickLogo = () => {
        goToMainPageByPage(navigate, 0)
    }
    const onClickLogin = () => {
        goToLoginPage(navigate)
    }
    const onClickLogout = () => {
        data.setLoggedIn(false)
        goToMainPageByPage(navigate, 0)
    }

    return (
        <HeaderDesign>
            <Logo src={logo} onClick={onClickLogo} />
            {!data.loggedIn && <Login onClick={onClickLogin}>Login</Login>}
            {data.loggedIn && <Login onClick={onClickLogout}>Logout</Login>}
        </HeaderDesign>
    );
}