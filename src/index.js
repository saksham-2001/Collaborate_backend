//require('dotenv').config({path: './env'});
import dotenv from "dotenv"
import dbConnect from "./db/db.js";

dotenv.config({
    path:'./env'
})



dbConnect();