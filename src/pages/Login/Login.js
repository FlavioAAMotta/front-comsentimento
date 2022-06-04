import React from "react"
import { LoginContainer } from "./styled"
import { MainStyle } from "../../styled-app"
import useForm from "../../hooks/useRequestData";
import { LoginData } from "../../services/login";
import { goToMainPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { form, onChange, clear } = useForm({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const onSubmit = async (event) => {
        try {
            event.preventDefault();
            await LoginData(form)
            goToMainPage(navigate)
            clear();
        } catch (err) {
            alert("Erro inesperado");
        }
    };

    return (
        <MainStyle>
            <LoginContainer>
                <h2>Login</h2>
                <form
                    onSubmit={onSubmit}
                >
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={onChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={form.password}
                        onChange={onChange}
                    />
                    {<button>Login</button>}
                </form>
            </LoginContainer>
            {/* TODO: create signup form */}
        </MainStyle>
    )
}