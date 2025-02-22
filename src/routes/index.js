import { Router } from "express";
import { authRouter } from "./auth/auth.route.js";
import { todoRouter } from "./todo/todo.route.js";


// eng bosh router
export const router = Router();
// path yaratish
router.use('/auth', authRouter)
router.use('/todo', todoRouter)