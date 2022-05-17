import db from '../models/index'
import bcrypt from 'bcrypt'

const salt = bcrypt.genSaltSync(10)

let checkEmailUser = (email) => {
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
let handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExist = await checkEmailUser(email)

            if (isExist) {
                let user = await db.Users.findOne({
                    where: { email: email },
                    attributes: ['email', 'role', 'password'],
                    raw: true
                })
                if (user) {
                    let check = await bcrypt.compareSync(password, user.password)
                    if (check) {
                        userData.errCode = 0;
                        userData.message = 'ok'
                        delete user.password
                        userData.user = user
                    } else {
                        userData.errCode = 3;
                        userData.message = 'wrong password'
                    }
                } else {
                    userData.errCode = 2;
                    userData.message = `User isn't found`
                }
            } else {
                userData.errCode = 1;
                userData.message = `Your email isn't exist`
            }
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}

let HashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        } catch (e) {
            reject(e)
        }
    })
}
let CreateNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let checkUser = await checkEmailUser(data.email)
            if (checkUser) {
                resolve({
                    errCode: 1,
                    message: 'Your email is exist'
                })
            } else {
                let hashPass = await HashUserPassword(data.password)
                await db.Users.create({
                    email: data.email,
                    password: hashPass,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    phone: data.phone,
                    role: data.role,
                    gender: data.gender

                })
                resolve({
                    errCode: 0,
                    message: 'Ok'
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}
let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.Users.findOne({
                where: { id: id }
            })
            if (!user) {
                resolve({
                    errCode: 2,
                    message: `User isn't exist`
                })
            } else {
                user.destroy()
                resolve({
                    errCode: 0,
                    message: 'User is deleted'
                })
            }

        } catch (e) {
            reject(e)
        }
    })
}
module.exports = {
    handleLogin: handleLogin,
    CreateNewUser: CreateNewUser,
    deleteUser: deleteUser
}