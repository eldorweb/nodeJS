import { asyncHandler } from "../../middleware/asyncHandler.middleware.js";
import { TodoModel } from "../../model/todo/todo.model.js"
import { HttpException } from "../../util(class)/http.exception.js";
import { deleteFileFromS3, uploadFileS3 } from "../../utils/s3.js";
import {v4} from 'uuid'
import path from 'path'

export const getAllTodo = asyncHandler(
    async (req, res)=>{
        const {search, page, per_page} = req.query
        console.log(search);
        
        const data = await TodoModel.find({})
        res.json({success: true, data})
    }
)


//query asosan get sorovlarida boaldi
export const getById = asyncHandler(
    async (req, res)=>{
    const {todoID} = req.params   //id nomi bilan qabul qiladi
    const data = await TodoModel.findById(todoID) //kerakli qiynmatni chiqaradi
    if(!data){
        // return res.status(422).json({success: false, errors: {msg: "Todo not found!"}})
        throw new Error("Todo not found!");
        
    }
    res.json({success:'true', data})
}
)



export const addTodo = asyncHandler(
    async (req, res)=>{
        const {title, desc} = req.body 
        const image = req.file
        const key = v4() + path.extname(image.originalname)  //oxiridagi formatini qirqib oladi
        
    const link =  await uploadFileS3(key, image.buffer) //image linkini qirqib olib saqlaymiz
        
        // console.log(req.file);   //rasm jonatilganda malumotlar consolega chiqadi.
        
        //buffer - fayllar 16 li sanoq sistemasida yozilgan bolad M) image - <Buffer ff d8 ff 00 10 4a ...../>
        const todo = await TodoModel.findOne({title})
        if(todo) {
            //return res.json({success: false, error: {message: "Todo already exists"}})  //return shu yergcha sindiradi
            throw new HttpException(422, "Todo alredy exists"); //throw - return bilan bir xil vazifani bajaradi  Error - default class element
            //(status code va error messsageni soraydi)
        }
    
        await TodoModel.create({title, desc, image: link}) //agar value bir xil bolsa bittasini yozsa boladi, Misol: desc: desc => desc
    
        res.json({success: true})
        
    }
)



export const updateTodo = asyncHandler(
    async (req, res)=>{
        const {title, desc} = req.body
        const {todoID} = req.params
    
        const data = await TodoModel.findByIdAndUpdate(todoID, {$set: {title, desc}}, {new: true, upsert:true}) //idsi bilan qidir va yangila(id, buyruq ){"new" faqat yangilangan malumotni qaytar, "upsert" malumot topa olmasa yangi idli data yaratadi}
    
        res.json({success:'true', data})   //tepadagi datani ham chiqarish
    }
)



export const deleteTodo = asyncHandler(
    async (req, res)=>{
        const {todoID} = req.params
    
        const todo = await TodoModel.findById(todoID);  //keyda ishlatish uchun todo alohida ajratib yoziladi
        await todo.deleteOne()
        // await TodoModel.findByIdAndDelete(todoID)
        const key = todo.image.split("s3.timeweb.cloud/"[1])   //faqatgina keyni qirqib olish uchun butub boshli linkni emas
        await deleteFileFromS3(key)
        res.json({success:'true'})
    }
)


// http://localhost:8090/todo/get?search=salom&page=1&page=10     postmanda searchni define qilish uchun. & - va degan manoni bildiradi