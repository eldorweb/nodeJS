
import express from 'express'
import { router } from './src/routes';
import cors from 'cors'
import {config} from 'dotenv'

const app = express();
void config();    //birinchi config ishlashi kerak process va boshqalardan oldin
const port = process.env.PORT || 3000    //.env fayldagi port qiymatini oladi


app.listen(8080, () => {
    console.log('Server run');
    
})

// istalgancha app yozilsa boladi

app.use('/', router)
app.use(cors({origin: ['https://example.ru'], credentials: true}))   //origin: '*' hammasiga ruxsat beradi

app.listen(port, ()=>{
    console.log(`Server run ${port}.`);
    
})
