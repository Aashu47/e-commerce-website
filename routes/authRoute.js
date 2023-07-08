import express from 'express'
import { registerController } from '../controllers/authControlLer.js'
//router object
const router = express.Router()

//routing
//Register || method post
router.post('/register', registerController)

export default router