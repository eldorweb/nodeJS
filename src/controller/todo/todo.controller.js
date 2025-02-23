import { TodoModel } from "../../model/todo/todo.model.js"

export const getAllTodo = async (req, res)=>{
    const {search, page, per_page} = req.query
    console.log(search);
    
    const data = await TodoModel.find({})
    res.json({success: true, data})
}
//query asosan get sorovlarida boaldi
export const getById = async (req, res)=>{
    const {todoID} = req.params   //id nomi bilan qabul qiladi
    const data = await TodoModel.findById(todoID) //kerakli qiynmatni chiqaradi
    if(!data){
        return res.status(422).json({success: false, errors: {msg: "Todo not found!"}})
    }
    res.json({success:'true', data})
}
export const addTodo = async (req, res)=>{
    const {title, desc} = req.body 
    
    await TodoModel.create({title, desc}) //agar value bir xil bolsa bittasini yozsa boladi, Misol: desc: desc => desc
    res.json({success: true})
    
}
export const updateTodo = async (req, res)=>{
    const {title, desc} = req.body
    const {todoID} = req.params

    const data = await TodoModel.findByIdAndUpdate(todoID, {$set: {title, desc}}, {new: true, upsert:true}) //idsi bilan qidir va yangila(id, buyruq ){"new" faqat yangilangan malumotni qaytar, "upsert" malumot topa olmasa yangi idli data yaratadi}

    res.json({success:'true', data})   //tepadagi datani ham chiqarish
}
export const deleteTodo = async (req, res)=>{
    const {todoID} = req.params

    await TodoModel.findByIdAndDelete(todoID)
    res.json({success:'true'})
}

// http://localhost:8090/todo/get?search=salom&page=1&page=10     postmanda searchni define qilish uchun. & va degan manoni bildiradi