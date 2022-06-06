import { useEffect } from "react";
import { goToLoginPage } from "../routes/coordinator"
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if(token === null){
            goToLoginPage(navigate);
        }
    }, [navigate])
}