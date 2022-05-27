import axios from '../utils/axios'

export const handleLogin = (email, password) => {
    return axios.post('/login', { email, password })
}
export const ReadUser = (id) => {
    return axios.get(`/all-user?id=${id}`)
}
export const CreateUser = (data) => {
    return axios.post('/create-user', { data: data })
}
export const DeleteUser = (id) => {
    return axios.delete('/delete-user', { id: id })
}