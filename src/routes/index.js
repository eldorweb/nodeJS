import { Router } from "express";
import { authRouter } from "./auth/auth.route";
import { todoRouter } from "./todo/todo.route";


// eng bosh router
export const router = Router();
// path yaratish
router.use('/auth', authRouter)
router.use('/todo', todoRouter)