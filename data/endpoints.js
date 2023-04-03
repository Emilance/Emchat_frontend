import http from "../utils/http"


export const  register = async (param) => {
    const resp = await http.post('/api/user/signup',  param)

    return resp
}

export const  login = async (param) => {
    const resp = await http.post('/api/user/login',  param)

    return resp
}