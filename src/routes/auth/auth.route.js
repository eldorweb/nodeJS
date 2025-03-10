import {Router}  from 'express'
import { login, me, signUp } from '../../controller/auth/auth.controller.js';
import { auth } from '../../middleware/auth.middleware.js';



export const authRouter = Router();


authRouter.post("/signup", signUp)
authRouter.post("/login", login)
authRouter.get("/me",auth, me)
