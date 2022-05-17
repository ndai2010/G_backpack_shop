import express from "express";
import bodyParser from "body-parser";
import ViewEngine from "./config/ViewEngine";
import WebRoute from "./route/web";
import connectDB from './config/ConnectDatabase'
require('dotenv').config();
let app = express();
connectDB()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

ViewEngine(app);
WebRoute(app);

let port = process.env.PORT
app.listen(port, () => {
    console.log("server started with port: " + port);
})