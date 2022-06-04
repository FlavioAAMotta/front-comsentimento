import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const LoginData = async (body) => {
    const url =
        `${BASE_URL}/users/login`;
    try {
        const res = await axios.post(url, body)
        localStorage.setItem("token", res.data.message);
    } catch (err) {
        alert("Dados inválidos");
    }
};
