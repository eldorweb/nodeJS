// console.log(__dirname);
// console.log(__filename);

// const path = require('path')
// const fs = require('fs');
// const os = require("os");

// console.log(path.extname(__filename));

// console.log(path.join(__dirname, "join.txt"));

//papka yaratish
// fs.mkdir(path.join(__dirname, "salom"), (err)=>{
//     if(err){
//         throw err;
//     }
// })


//papkani ochirissh
// fs.rmdir(path.join(__dirname,"salom"), (err)=>{
//     if(err){
//         throw err;
//     }
// })

//file yaratish
// fs.writeFile("text.txt", 'salom', {}, (err)=>{
//     if (err){
//         throw err
//     }
// })



//filelarni ochirish

// fs.rm(path.join(__dirname, 'text.txt'), (err)=>{
//     throw err;
// })

// console.log(os.cpus())


// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.totalmem());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.tmpdir())
// console.log(os.release());


import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});





