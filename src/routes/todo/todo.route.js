import {Router}  from 'express'
import { addTodo, deleteTodo, getAllTodo, getById, updateTodo } from '../../controller/todo/todo.controller.js';
import { addTodoV, getAllV, getByIdV } from '../../validator/todo/todo.validator.js';
import { validation } from '../../validator/validator.js';
import { auth } from '../../middleware/auth.middleware.js';
import { uploadMiddleware } from '../../middleware/multer.middleware.js';


export const todoRouter = Router();
// get("/get", middleware, getAllTodo) middleware= (req, res, next)=>{}
    // const validator = (req, res, next) => {
    //     const {title, desc} = req.body



    //     if(!title || !desc){     //body json ni yozilmasa error orniga chiqadi
    //     return    res.json({success: false, msg:"Title and desc are required"})
    //     }

    //     next()  //agar hammasi joyida bolsa nextni ishlat
    // }
todoRouter.get('/get',getAllV(),validation, getAllTodo)  //getAllTodo ni export qilamiz
todoRouter.get('/get/:todoID',getByIdV(),validation, getById)   // / dan keyin istalgan id ga boshlangan amal qilsa boladi
// todoRouter.post('/add',auth,addTodoV(),validation, addTodo)//middlewarega validation larni chawiramiz        validation va addTodoV() lar doimo birga bolishi kerak
todoRouter.post('/add',uploadMiddleware.single("image"), addTodo)   //single - faqat bitta fayl yuklashda    array- kop fayllar yuklashda   //single("___") - postman fom_data da nima yozilgan bolsa yoziladi
todoRouter.put('/update/:todoID',auth, updateTodo)   //put butun boshli malumotlarni yangilaydi
//todoRouter.patch('/update', AddTodo)   //patch qisqa malumotlarni yangilaydi, kop ishlatilmaydi
todoRouter.delete('/delete/:todoID',auth, deleteTodo) //auth tokenlar, va authentifikatsiya qilish, faqat login qlganlar uchun
