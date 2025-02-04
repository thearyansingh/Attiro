import express from 'express'
import { UserLogin,AdminLogin,Register } from '../Controller/UserController.js'
const UserRouter=express.Router();

UserRouter.post('/login',UserLogin)
UserRouter.post('/register',Register)

UserRouter.post('/AdminLogin',AdminLogin)

export {UserRouter};