// import dependencies
import express from 'express';
import dotenv from 'dotenv';
import bootcamps from './routes/bootcamps.js';
import morgan from 'morgan';
import mongoose from 'mongoose'
import connectDB from './config/db.js'
import colors from 'colors';
import { urlencoded } from 'body-parser';



//Initialize .env
dotenv.config({path: './config/config.env'})
const app = express();

//Port
const Port = process.env.Port || 5000

// logger
if(process.env.NODE_ENV === 'development') ;
{app.use(morgan('tiny'))}

// Body and Url Parser 
app.use(express.json())
app.use(express.urlencoded({urlencoded:true}))

// Routes 
app.use('/api/v1/bootcamps', bootcamps)

//Connect Database
connectDB()



// Start Server 
app.listen(5000, (err)=> {
    if(err) throw err;
    console.log(`Server running on ${process.env.NODE_ENV} on  port ${Port}`.yellow.underline)
})