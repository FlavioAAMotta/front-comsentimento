import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const LoginData = async (body) => {
    const url = `${BASE_URL}/users/login`;
    try {
        if (body.email && body.password) {
            const res = await axios.post(url, body)
            localStorage.setItem("token", res.data.message)
        }
    } catch (error) {
        throw new Error("Dados inválidos") 
    }
};
