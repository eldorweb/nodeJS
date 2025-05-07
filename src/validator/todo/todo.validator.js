import { body, param, query } from "express-validator";

export const addTodoV = ()=>[
    body("title", 'Title is required').notEmpty(),   //postmandagi bodyga yozilgan malumotlar yoziladi("","agar malumot chiqmasa ")  .notEmpty - bosh bolmasligi kerak
    body("title", 'Title must be string').isString(), //title string bolishi kerak(array yoki number emas)
    body("desc", 'Description is required').notEmpty(),
    body("desc", 'Description must be a string').isString(),
]


export const getByIdV = () => [  
    param('todoID', 'todoID is MongoID!').isMongoId()   //getById da params ishlatilgan bolsa validatorda ham parmasni chaqirish kerak
]

export const getAllV = () => [
    query('search', 'Search must be a string!').optional().isString(),   //.optional() kiritsa ham kiritmasa ham ixtiyoriy
    query('page', 'page must be a number!').optional().isInt(),
    query('per_page', 'Per page must be a number!').optional().isInt()    //.isInt bu butun sonlar -5 5   .isNumeric() bu barcha sonlar -5.5, 45.66
]   //.isIn(['active', 'inactive'])  isIn per_page faqat active va inactive ishlatilsa funksiya yuradi
//.isLength({m})  .isMobilePhone('uz-Uz')

