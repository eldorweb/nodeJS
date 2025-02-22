import {config} from 'dotenv'

void config();    //birinchi config ishlashi kerak process va boshqalardan oldin
export const PORT = process.env.PORT || 3000    //.env fayldagi port qiymatini oladi
export const DB_URL = process.env.DB_URL  //databasega ulanish uchun