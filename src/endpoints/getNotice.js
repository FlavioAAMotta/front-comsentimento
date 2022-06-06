import { BASE_URL } from '../constants/urls'
import axios from 'axios'

export const getNotice = async (page) => {
    page = page || 0
    try {
        const notice = await axios
            .get(`${BASE_URL}/notices?limit=4&offset=${page}`)
        return notice.data
    } catch (error) {
        console.log(error.message)
    }
}