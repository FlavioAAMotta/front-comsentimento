import React, { useContext } from "react"
import { LoginImage, Logo } from "./styled"
import { MainStyle } from "../../styled-app"
import useForm from "../../hooks/useForm";
import { LoginData } from "../../endpoints/login";
import { goToMainPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../../global/GlobalStateContext";
import bkgIMG from "../../images/comsentimento_simbolo-01.png"
import logo from "../../images/comsentimento_horizontal-01.png"
import "./login.scss"

export const Login = () => {
    const { form, onChange, clear } = useForm({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const { data } = useContext(GlobalStateContext);

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await LoginData(form) 
            data.setLoggedIn(true)
            goToMainPage(navigate)
        } catch (error) {
            alert(error.message || "Falha no login")
        }
    };

    return (
        <MainStyle>
            <LoginImage src={bkgIMG} />
            <div className="login">
                <Logo src={logo} />
                <form
                    onSubmit={onSubmit}
                >
                    <div className="form__group field">
                        <input
                            type="input"
                            className="form__field"
                            name="email"
                            onChange={onChange}
                            id='email'
                            required />
                        <label htmlFor="email" className="form__label">Email</label>
                    </div>
                    <div className="form__group field">
                        <input
                            type="password"
                            className="form__field"
                            name="password"
                            id='password'
                            onChange={onChange}
                            required />
                        <label htmlFor="senha" className="form__label">Senha</label>
                    </div>
                    {<button className="login-button">Entrar</button>}
                </form>
            </div>
            {/* TODO: create signup form */}
        </MainStyle>
    )
}