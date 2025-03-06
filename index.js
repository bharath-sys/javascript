// using express 

// const express = require('express');
// const app = express();

// app.use((req, res, next) => {
//     console.log(`${req.url} is the route path`);
//     next();
// });

// app.get('/apple', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(3000, () => {
//   console.log('Server running at http://localhost:3000/');
// });

// using http using middleware

// const http = require('http');

// const middleware = (req,res,next)=>{
//     console.log(req.url, "logged");
//     next();
// }

// const server = http.createServer((req,res)=>{
//     const url = req.url;
//     middleware(req,res,()=>{
//         if(url == "/") {
//             res.write("hello world");
//             res.end();
//         }
//     });
// });



// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
// });

// learning module.exports 
// const math = require('./math.js');

// const add5 = math.makeAdder(5);
// console.log(add5(15));

// const originalObject = {
//     a: 1,
//     b: {
//       c: 2,
//       d: {
//         e: 3
//       }
//     }
//   };

// const res = {};
// const flattObj = (obj, key) => {
//     for(const prop in obj) {
//         const value = obj[prop];
//         const newPath = key ? key + '.' + prop : prop;
//         if(typeof value === 'object') {
//             flattObj(obj[prop], newPath);
//         }
//         else {
//             res[newPath] = obj[prop]; 
//         }
//     }
// }

// flattObj(originalObject,"");
// console.log(res);

console.log("hello world2");