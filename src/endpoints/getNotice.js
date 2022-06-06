import axios from 'axios'

export const getNotice = async (url) => {
    try {
        const notice = await axios.get(url)
        return notice.data
    } catch (error) {
        console.log(error.message)
    }
}