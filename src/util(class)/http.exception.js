export class HttpException extends Error{   //extends - meros oladi  Error- default class
    constructor(statusCode, message) {
        super(message)  // super - faqat string oladi eski messagega jonatib yuboradi
        this.statusCode = statusCode
    }
}