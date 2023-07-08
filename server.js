import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'



//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes)

//rest api
app.get('/', (req, res) =>  {
    res.send ("<h1>Welcome to Ecommerce Website</h1>")
})

//PORT
const PORT = process.env.PORT || 8080

//Run listen
 app.listen(PORT, () => {
    console.log(`Server Running on ${PORT}`.bgCyan.white);
 })