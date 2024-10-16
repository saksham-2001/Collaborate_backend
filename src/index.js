//require('dotenv').config({path: './env'});
import dotenv from "dotenv"
import dbConnect from "./db/db.js";
import app from "./app.js";

dotenv.config({
    path:'./env'
})


const startServer = async () => {
    try {
      
      await dbConnect();
  
      const PORT = process.env.PORT || 3000;
  
      
      app.listen(PORT, () => {
        console.log(`Server is running at PORT ${PORT}`);
      });
    } catch (err) {
     
      console.error("DB Connection failed", err);
    }
  };
  
  
  startServer();
  