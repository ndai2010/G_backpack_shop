import express from "express";

let router = express.Router()

let webRoute = (app) => {
    return app.use("/", router)
}

module.exports = webRoute