export const errorMiddleware = (error, req, res, next) => {
    // console.log('aaaaa', error);
    console.log(error.statusCode);
    
    return res.status(error.statusCode).json({
        success: false, 
        error: {message: error?.message || "Interval server problem"}})  //return shu yergcha sindiradi
    
}