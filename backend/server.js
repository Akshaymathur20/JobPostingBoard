import express from 'express'
import dotenv from'dotenv'
import connectDB from './config/db.js';



dotenv.config()
connectDB();


const app = express();

app.get('/',(req,res)=>{
    res.send('Server is ready')
});


app.get('/thikhai',(req,res)=>{
    res.send('Han bhai sab thik')
});


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server at http://localhost:${port}`);
    
})