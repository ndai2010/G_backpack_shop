import UserService from '../services/UserService'
let getUser = (req, res) => {
    return res.render('../views/HomePage.ejs')
}
let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }
    let userData = await UserService.handleLogin(email, password)
    return res.status(200).json({
        userData
    })
}
module.exports = {
    getUser: getUser,
    handleLogin: handleLogin
}