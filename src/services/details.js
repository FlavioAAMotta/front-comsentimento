import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const getNoticeDetails = async (id) => {
    try {
        const notice = await axios.get(`${BASE_URL}/notices/${id}`)
        return notice.data
    } catch (error) {
        console.log(error.message)
    };
}