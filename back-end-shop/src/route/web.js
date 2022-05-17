import express from "express";
import UserController from '../controller/UserController'

let router = express.Router()

let webRoute = (app) => {
    router.get('/', UserController.getUser)

    router.post('/login', UserController.handleLogin)
    router.post('/create-user', UserController.CreateNewUser)
    // router.get('/all-user', UserController.CreateNewUser)
    router.put('/update-user', UserController.updateUser)
    router.delete('/delete-user', UserController.deleteUser)
    return app.use("/", router)
}

module.exports = webRoute