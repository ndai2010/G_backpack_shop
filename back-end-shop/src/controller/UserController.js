import UserService from '../services/UserService'
let getUser = (req, res) => {
    return res.render('../views/HomePage.ejs')
}
let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    let userData = await UserService.handleLogin(email, password)
    return res.status(200).json(userData)
}
let CreateNewUser = async (req, res) => {
    let data = req.body;

    let message = await UserService.CreateNewUser(data)

    return res.status(200).json(message)
}
let updateUser = async (req, res) => {
    let data = req.body;
    let message = await UserService.updateUser(data)
    return res.status(200).json(message)
}
let deleteUser = async (req, res) => {
    let idUser = req.body.id;
    let message = await UserService.deleteUser(idUser)
    return res.status(200).json(message)
}
let handleSignUp = async (req, res) => {
    let data = req.body;
    let message = await UserService.handleSignUp(data)
    return res.status(200).json(message)
}
let GetAllUsers = async (req, res) => {
    let id = req.query.id
    let message = await UserService.GetAllUsers(id)
    return res.status(200).json(message)
}
module.exports = {
    getUser: getUser,
    handleLogin: handleLogin,
    CreateNewUser: CreateNewUser,
    deleteUser: deleteUser,
    updateUser: updateUser,
    handleSignUp: handleSignUp,
    GetAllUsers: GetAllUsers
}