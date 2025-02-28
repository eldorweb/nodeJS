export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)    //resolve -- try ichidagi mmalumot(muvaffaqiyotli bolsa)  catch- error bolsa amalga oshadi
}