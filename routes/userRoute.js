import express from 'express'
import { getProfile, register, userLogin } from '../controllers/userController.js'

let userRouter = express.Router();

userRouter.post('/register',register)    
userRouter.post('/login',userLogin)
userRouter.get('/profile/:email',getProfile  )

export default userRouter