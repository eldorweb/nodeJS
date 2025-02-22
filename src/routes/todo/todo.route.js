import {Router}  from 'express'
import { AddTodo, deleteTodo, getAllTodo, getById, updateTodo } from '../../controller/todo/todo.controller.js';


export const todoRouter = Router();

todoRouter.get('/get', getAllTodo)  //getAllTodo ni export qilamiz
todoRouter.post('/add', AddTodo)
//todoRouter.post('/add/:id', getById)   // / dan keyin istalgan id ga boshlangan amal qilsa boladi
todoRouter.put('/update', updateTodo)   //put butun boshli malumotlarni yangilaydi
//todoRouter.patch('/update', AddTodo)   //patch qisqa malumotlarni yangilaydi, kop ishlatilmaydi
todoRouter.delete('/delete', deleteTodo)