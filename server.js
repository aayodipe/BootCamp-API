// import dependencies
import express from 'express';
import dotenv from 'dotenv';

//Initialize .env
dotenv.config()

const app = express();

//Port
const Port = process.env.Port || 5000


// Start Server 
app.listen(5000, (err)=> {
    if(err) throw err;
    console.log(`Server running on port ${Port}`)
})