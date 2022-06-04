import { useEffect } from "react";
import { goToHomePage } from "../routes/coordinator"
import { useNavigate } from "react-router-dom";

export const useProtectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        console.log(token)
        if(token === null){
            goToHomePage(navigate);
        }
    }, [navigate])
}