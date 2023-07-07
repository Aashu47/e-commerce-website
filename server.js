import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan'
import connectDB from './config/db.js';


//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express()
app.get('/', (req, res) =>  {
    res.send ("<h1>Welcome to Ecommerce Website</h1>")
})

//middlewares
app.use(express.json())
app.use(morgan('dev'))


//PORT
const PORT = process.env.PORT || 8080

//Run listen
 app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgCyan.white);
 })