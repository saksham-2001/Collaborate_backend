import express from "express"
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();

//Configuring server settings using app.use

//Setting up Cross Origin Access for the server
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//Configuring JSON data limit
app.use(express.json({limit: "16kb"}))

//Configuring URL encoded Data
 app.use(express.urlencoded({extended: true, limit: "16kb"}))

//configuring any picture,pdf upload
app.use(express.static("public"))

//Cookie configuration
app.use(cookieParser())

export default app;
