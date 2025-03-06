// callbacks 
/* function which as passed as an argument to another function 
which will be executed after the execution of this function */

function printAndExecute(prntStr,callbackFn){
    console.log(prntStr);
    callbackFn();
}

// printAndExecute("this is print string",()=>{console.log("this is the callback after printString")})

// what is the defect of callBacks it is callback hell : nested like pyramid structure 

// promises 
/*
    Promise is a js object which represents the state of asynchronous process weather it is pending or success
    it takes excuter function as a callback which will be executed immediately after initialisation of promise
*/

const promise = new Promise((resolve,reject)=>{
    const res = true;
    try{
        if(!res) throw new Error("i am rejected promise");
        resolve("i am resolved promise")
    }
    catch(err){
        reject(err);
    }
})

// promise.then(res=>console.log(res))
// .catch(err=>console.log(err));

// we can also write promise as
// const p = Promise.resolve("i am resolvedPromise");
// (
//    async function () {
//     const res = await p;
//     console.log(res);
//     }
// )();
// console.log(p);
// p.then(res=>console.log(res))

// example of executer fun in code 

/*
console.log("start")
new Promise(()=>{console.log("middle")})
console.log("end")
*/

// promise have 4 combinator functions 

// Promise.resolve("i am resolvedPromise 1").then(res=>console.log(res));
// const p2 = new Promise((resolve)=>{
//     setTimeout(()=>{resolve("i am resolvedPromise 2")},100);
// })
// const p3 = new Promise((resolve,reject)=>{
//     resolve("i am resolvedPromise 3")
// })

/*

Promise.all([p1, p2, p3]).then((res)=>{ // returns all resolved promise at once if any one fails it return failed promise
    console.log(res)
}).catch((err)=>console.error(err,"ALL"));

Promise.race([p1, p2, p3]).then((res)=>{
    console.log(res,"race") // returns first resolved promise and if any one fails it returns failed promise
}).catch((err)=>console.error(err,"race"));

Promise.any([p1, p2, p3]).then((res)=>{ // returns any resolved promise and if all fails it returns failed promise
    console.log(res,"any") 
}).catch((err)=>console.error(err,"any"));

Promise.allSettled([p1, p2, p3]).then((res)=>{
    console.log(res) // returns all resolved and rejected promise
}).catch((err)=>console.error(err));

*/

// output 1

// console.log("start");
// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(3);
// });
// promise1.then((res) => {
//     console.log("Result:" + res); // will not be printed as we are not resolving any thing then will not execute
// });
// console.log("end");

// output 2

async function promiseRec(arrayOfP){
    if(arrayOfP.length == 0){
        return;
    }
    const frstProm = arrayOfP.shift();
    frstProm.then((res) => {console.log("Result:" + res)})
    .catch((err) => {console.log(err)});
    promiseRec(arrayOfP);
}

// promiseRec([p1,p2,p3])


function PromisePolyFill(executor) {
    let onResolve;
    function resolve(val) {
        onResolve = typeof onResolve === "function" ? onResolve : v=>v;
        onResolve(val);
    }
    this.then = function (callback) {
        onResolve = callback;
        return this;
    };
    this.catch = function (callback) {
        console.log(typeof callback)
        return this;
    }
    executor(resolve);
}

// you can test in case of asynchronous operation

// new PromisePolyFill(
//     function (resolve) {
//          setTimeout(() => { resolve(2000) }, 1000)
//     }
// ).then(val => console.log(val));

// const arr = [1,,2];
// console.log(arr.map(val => val*2));

// console.log("hello1")
// const p = new Promise((res,rej)=>{res("hello")}).then((r)=>console.log(r));
// console.log("hello2")

async function f1() {
    setTimeout(()=>{console.log("1")},5000);
}

async function f2() {
    setTimeout(()=>{console.log("2")},10000);
}

(
  async function (){
    await f1();
    console.log("hello222")
    await f2();
  }  
)()