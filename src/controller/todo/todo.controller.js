import { TodoModel } from "../../model/todo/todo.model.js"

export const getAllTodo = async (req, res)=>{
    const data = await TodoModel.find({})
    res.json({success: true, data})
}

export const getById = (req, res)=>{
    const {id} = req.params   //id nomi bilan qabul qiladi
    
    res.json({success:'true'})
}
export const AddTodo = async (req, res)=>{
    const {title, desc} = req.body 
    

    await TodoModel.create({title: title, desc}) //agar value bir xil bolsa bittasini yozsa boladi, Misol: desc: desc => desc
    
}
export const updateTodo = (req, res)=>{
    const {title, desc} = req.body 
    
    res.json({success:'true'})
}
export const deleteTodo = (req, res)=>{
    const {title, desc} = req.body 
    
    res.json({success:'true'})
}