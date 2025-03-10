import { body, param, query } from "express-validator";

export const addAuthV = ()=>[
    body("first_name", 'first_name is required').isString(),   //postmandagi bodyga yozilgan malumotlar yoziladi("","agar malumot chiqmasa ")  .notEmpty - bosh bolmasligi kerak
    body("last_name", 'last_name must be string').isString(),
    body("email", 'email is required').isEmail(),
    body("phone", 'Description must be a number').isInt(),
    body("password", 'password must be a strong').isStrongPassword(),
]



export const getAllV = () => [
    query('search', 'Search must be a string!').optional().isString(),   //.optional() kiritsa ham kiritmasa ham ixtiyoriy
    query('page', 'page must be a number!').optional().isInt(),
    query('per_page', 'Per page must be a number!').optional().isInt()    //.isInt bu butun sonlar -5 5   .isNumeric() bu barcha sonlar -5.5, 45.66
]   //.isIn(['active', 'inactive'])  isIn per_page faqat active va inactive ishlatilsa funksiya yuradi
//.isLength({m})  .isMobilePhone('uz-Uz')

