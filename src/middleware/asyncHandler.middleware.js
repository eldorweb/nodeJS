export const asyncHandler = (fn) => (req, res, next) => { // fn - bu yerda funksiya qabul qilamiz
    Promise.resolve(fn(req, res, next)).catch(next)    //resolve -- try ichidagi mmalumot(muvaffaqiyotli bolsa)  catch- error bolsa amalga oshadi
} //agar error bolsa next orqali asosiy routerdan otib errormiddlawarega boradi