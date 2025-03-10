import {model, Schema} from "mongoose";

const userSchema = new Schema(
    {
        full_name: {type: String, required: true},
        email: {type: String, unique: true, required: true}, //unique - faqat bir marta saqlanisg uchun
        phone: {type: String, required: true, unique: true},
        password: {type:String, required: true, select: false},  //select - find methodlarda parol jonatilmaydi
        status:{type:String, enum:["active", "inactive"], default: "active"}, //enum = faqat active/inactive qiymat qabul qiladi va default active hisoblanadi
    },
    {
        timestamps:{createdAt: "created_at", updatedAt: "updated_at"},
        versionKey: false, //__ va 0 qiymatlarini olib tashlaydi
    }
);

export const userModel = model("user", userSchema, "user")