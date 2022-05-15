import express from "express";
import UserController from '../controller/UserController'
let router = express.Router()

let webRoute = (app) => {
    router.get('/', UserController.getUser)

    router.post('/login', UserController.handleLogin)
    return app.use("/", router)
}

module.exports = webRoute