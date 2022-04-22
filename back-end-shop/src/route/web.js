import express from "express";
import UserController from '../controller/UserController'
let router = express.Router()

let webRoute = (app) => {
    router.get('/', UserController.getUser)
    return app.use("/", router)
}

module.exports = webRoute