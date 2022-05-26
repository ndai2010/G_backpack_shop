import axios from '../utils/axios'

export const handleLogin = (email, password) => {
    return axios.post('/login', { email, password })
}
export const ReadUser = (id) => {
    return axios.get(`/all-user?id=${id}`)
}
