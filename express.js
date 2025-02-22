
import express from 'express'
import { router } from './src/routes/index.js';
import cors from 'cors'
import { PORT } from './src/utils/secrets.js';
import { connectDB } from './src/config/database.config.js';

const app = express();
//databasega ulanish uchun
void connectDB();  //return qilmaydiganga void ishlatiladi

app.listen(8080, () => {
    console.log('Server run');
    
})

// istalgancha app yozilsa boladi

app.use('/', router)
app.use(cors({origin: ['https://example.ru'], credentials: true}))   //origin: '*' hammasiga ruxsat beradi
app.use(express.json())  //postmandan jonatilayotgan json fayllarni qabul qilish uchun
app.use(express.urlencoded({extended: true}))   //postmandagi form, fiyllarni jonatishga yoki qabul qilishga ruxsat beradi


app.get('/', (req, res)=>{  
    //res.send('OK!')              //ekranga text chiqarish uchun
    res.json({success: true, msg: "OK!"})    //ekranga json faylda chiqarish uchun
}) 


app.listen(PORT, ()=>{
    console.log(`Server run ${PORT}.`);
})
