import express from 'express';
import cors from 'cors';
import pool from '../server/database/config/db.js'
const app = express();

//middlewares:
app.use(cors);
app.use(express.json());



//Routes: 
//create user post

app.post("/posts",async(res,req)=>{
    try {
        
        
    } catch (error) {
        console.error(error.message);
        
    }

})
//get user post

app.listen(5000, () => console.log("Server started at port 5000!"));
