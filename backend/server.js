import express from 'express';
import mongoDB from 'mongoose'
import dotenv from'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import path from 'path'
import { log } from 'console';
import authRoutes from './routes/authRoutes.js'

dotenv.config()
const app =express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())


let connectDB = async() =>{
    try{
        await mongoDB.connect(process.env.MONGODB_URL)
        console.log("DB connected");   
    }
    catch(err){
        console.log(err);
    }
}

connectDB()


app.use('/', authRoutes)

const PORT = process.env.PORT || 4000
app.listen(PORT, () =>{
    console.log(`Server is running on Port ${PORT}`);
})



