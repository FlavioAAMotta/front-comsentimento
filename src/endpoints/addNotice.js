import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const addNotice = async (form) => {
    const axiosConfig = {
        headers: {
            Authorization: localStorage.getItem("token")
        }
    }
    let body = {
        noticeTitle: form.title,
        noticeDescription: form.description,
        noticeOpeningDate: form.date,
        noticePDFDetails: form.filePath,
        noticeStatus: form.status || "0"
    }
    const url = `${BASE_URL}/notices`;
    try {
        console.log(body);
        const res = await axios.post(url, body,axiosConfig)
    } catch (err) {
        alert("Dados inválidos");
    }
};
