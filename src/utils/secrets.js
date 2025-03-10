import {config} from 'dotenv'

void config();    //birinchi config ishlashi kerak process va boshqalardan oldin
export const PORT = process.env.PORT || 3000    //.env fayldagi port qiymatini oladi
export const DB_URL = process.env.DB_URL  //databasega ulanish uchun
export const JWT_SECRET = process.env.JWT_SECRET   //tokennni olishe
export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY
export const AWS_BUCKET_NAME = process.env.AWS_BUCKET_NAME
export const AWS_URL = process.env.AWS_URL
export const AWS_SECRET_ACESSS_KEY = process.env.AWS_SECRET_ACESSS_KEY
export const AWS_REGION = process.env.AWS_REGION
