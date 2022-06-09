import axios from "axios";
import { BASE_URL } from "../constants/urls";

// export const addNotice = async (form) => {
//     const url = `${BASE_URL}/upload/single`;
//     let file = form.filePath
//     try {
//         await axios.post(url, file)
//     } catch (err) {
//         alert("Dados inválidos");
//     }
// };

const addFile = async (file) => {
    const url = `${BASE_URL}/pdfFile`;
    console.log(file)
    try {
        const fileName = await axios({
            url: url,
            method: "POST",
            data: file,
            headers: { "Content-Type": "multipart/form-data" },
        })
        return fileName
    } catch (err) {
        alert("Dados inválidos");
    }
}
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
        noticePDFDetails: form.file,
        noticeStatus: form.status || "0"
    }
    const url = `${BASE_URL}/notices`;
    try {
        const response = await addFile(body.noticePDFDetails)
        body.noticePDFDetails = response.data
        console.log(body)
        await axios.post(url, body, axiosConfig)
    } catch (err) {
        alert("Dados inválidos");
    }
};
