import { userModel } from "../model/user/user.model.js";
import { HttpException } from "../util(class)/http.exception.js";
import { JWT_SECRET } from "../utils/secrets.js";
import { asyncHandler } from "./asyncHandler.middleware.js";
import pkg from 'jsonwebtoken';
const { verify} = pkg;


export const auth = asyncHandler(async(req,res,next) => {
    let token = undefined;
    if(req.headers?.authorization){
        token = req.headers.authorization.split(' ')[1]  //beare token bolganiligi uchun array qiliub turib 2 indexdagi tokenni alohida oladi
    }
    if(!token){ 
        throw new HttpException(401, "Unauthorized!")   //400 - bad request   401-  unauthorized
    }
    const decoded = verify(token, JWT_SECRET)  //compare
    if(!decoded) {
        throw new HttpException(401, "Unauthorized")
    }
    const user = await userModel.findById(decoded.id)  //decoded.id - user id

    req.body.user = user;

    next()
})