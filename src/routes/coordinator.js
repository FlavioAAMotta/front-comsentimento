export const goToMainPage = (navigate) => {
    navigate("/notices/0")
}
export const goToMainPageByPage = (navigate, page) => {
    navigate(`/notices/${page}`)
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goBack = (navigate) => {
    navigate(-1)
}