import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnect = async ()=>{
try{
const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(`Db connected!! ${connectionInstance.connection.host} `);
}
catch (error){
    console.log("MONGODB Connection Error", error);
    process.exit(1); //node method

}




}
export default dbConnect;
