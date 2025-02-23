import {validationResult} from 'express-validator'

export const validation = (req, res, next) => {
    const errors = validationResult(req);   //req body, params va boshqa malumotlarda erorlarni aniqlaydi

    if(errors.isEmpty()){
        return next()
    }

    let msg = ""

    errors.array().map((err) => {
        msg += err.msg + " ";
    })
//agar eror chiqsa frontendga jonatish uchun
    return res.status(422).json({success: false, errors: {msg}})
}