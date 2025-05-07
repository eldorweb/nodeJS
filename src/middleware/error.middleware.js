export const errorMiddleware = (error, req, res, next) => { //butun dasturda error chiqadigan bolsa shu yerda chiqadi
    // console.log('aaaaa', error);
    console.log(error.statusCode); 
    
    return res.status(error.statusCode).json({ 
        success: false, 
        error: {message: error?.message || "Interval server problem"}})  //return shu yergcha sindiradi    || agar topa olmasa shundann keyingi code ishlaydi
    
}