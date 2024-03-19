import express from 'express';
import cors from 'cors';
import pool from './database/config/db'
const app = express();

//middlewares:
app.use(cors);


//Routes: 
//create user post
//get user post

app.listen(5000, () => console.log("Server started at port 5000!"));
