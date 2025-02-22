import { connect } from "mongoose";
import { DB_URL } from "../utils/secrets.js";

export const connectDB = async() => {
    try {
        await connect(DB_URL);
        console.log('DB Connected!');
        
    } catch (error) {
        console.error(error);
        
    }
}