import db from '../models/index'

let handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExist = await checkUser()

            if (isExist) {

            } else {
                userData.errCode = 1;
                userData.message = `Your email isn't exist`
                resolve(userData)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let checkUser = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { email: email }
            })
            if (user) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (e) {
            reject(e)
        }
    })
}
let comparePassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {

        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    handleLogin: handleLogin
}