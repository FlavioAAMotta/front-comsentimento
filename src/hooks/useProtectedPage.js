import { useEffect, useContext } from "react";
import { goToLoginPage } from "../routes/coordinator"
import { useNavigate } from "react-router-dom";
import GlobalStateContext from "../global/GlobalStateContext";

export const useProtectedPage = () => {
    const navigate = useNavigate();
    const {data} = useContext(GlobalStateContext);

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token === null){
            alert("Você não está logado")
            data.setLoggedIn = false;
            goToLoginPage(navigate);
        }
    }, [navigate])
}