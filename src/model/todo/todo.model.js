import { model, Schema } from "mongoose";
//meros qilish uchun, sxemalar yaratish
const todoScheme = new Schema({
    title: {type: String},
    desc: {type: String},
},
{timestamps: true, versionKey: false} //update vaqitini automotic yozib beradi
)


export const TodoModel = model('todo', todoScheme, 'todo') //(name, scheme, collection name)