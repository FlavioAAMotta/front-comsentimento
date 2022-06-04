export const goToNoticeDetails = (navigate, id) => {
    navigate(`/details/${id}`)
}
export const goToMainPage = (navigate) => {
    navigate("/")
}

export const goToHomePage = (navigate) => {
    navigate("/login")
}

export const goBack = (navigate) => {
    navigate(-1)
}