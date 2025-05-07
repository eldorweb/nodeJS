import {asyncHandler} from '../../middleware/asyncHandler.middleware.js'
import { userModel } from '../../model/user/user.model.js';
import { HttpException } from '../../util(class)/http.exception.js';
import bcrypt from 'bcrypt'   //paswordni hashlash uchun
import pkg from 'jsonwebtoken';
const {sign, verify} = pkg;
import {JWT_SECRET} from '../../utils/secrets.js'

export const signUp = asyncHandler(async(req, res) => {
    const {full_name, email, phone, password} = req.body;
                                            //email yoki phone bir xil bolsa error chiqadi
    const exitUser = await userModel.findOne({$or:[{email}, {phone}]})  //$or $nor $and doim array bilan yoziladi   findOne - faqat bittasini topadi    find- Obyect qaytaradi, hammasini topadi
    if(exitUser){
        throw new HttpException(409, "User phone or email already exits!")  //409 - conflic status error code
    }

    const salt = await bcrypt.genSalt(10)         //Salt - kuchlilik darajasi(1 dan 10 gacha berish recommended)(10 - perfect number)
    const hash_password = await bcrypt.hash(password, salt)   //heychlanadi
                                                        //password: newPassword tepadagi qymatni ifodalashda
    await userModel.create({full_name, email, phone, password: hash_password})          //password: newPassword      hashlangan parolni olib kelamiz 
    
    res.status(201).json({success: true})      //200 - ok   201-created
})

export const login = asyncHandler(async(req, res) => {
    const {email,password} = req.body;
    
    const exitUser = await userModel.findOne({email}).select("+password")  //, status: "inactive" we can add   .select("+passwor") - userga password jonatmaydi faat sizga korinadi
    if(!exitUser){                  //userni tekshirish
        throw new HttpException(409, "Kirish malumotlari xato!!")  //errorlarni bir xil berish kerak. xakerlardan asrash uchun
    }
    if(exitUser.status === 'inactive'){
        throw new HttpException(409, "Kirish malumotlari xato!!")
    }

    if(!(await bcrypt.compare(password, exitUser.password))){   //hashlangan paswwordni oziga qaytarib taqqoslaydi
        throw new HttpException(409, "Kirish malumotlari xato!!")
    }
// token yaratish
    const token = sign({id: exitUser._id}, JWT_SECRET, {expiresIn:"24h"})  //expiresIn- qancha vaqtda yoq bolish 1s 1h 1d
    
    res.status(201).json({success: true, data: exitUser, token})      
})
export const me = asyncHandler(async(req, res) => {
    res.status(200).json({success: true, data: req.body.user})      
})