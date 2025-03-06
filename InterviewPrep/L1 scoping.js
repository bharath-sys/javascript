// var , let , const 
/*
1. scoping 
2. initialization , redeclaration
3. hoisting 
*/


/*
 *** scoping **** 
var : functional scope 
const, let : block scope
example 
*/

const test = 1;
// console.log("test: ",test);

{
    var b = 1;
    const c = 2;
    let d = 3;
}

// console.log("b: " ,b)
// console.log("c: " ,c) // c is not defines as c,d are block scope
// console.log("d: " ,d)


/*
 *** shadowing *** 
var can be redeclared any number of times 
where as let and const cannot be in same scope

*/
var b = 10;
const foo = () => {
    let a = 1;
    var b = 6;
    const c = 1;
    let d = 1; // illegal shadowing
    if (3 % 2 == 1) {
        let a = 2;
        var b = 2;
        const c = 2;
        // var d = 2; // illegal shadowing : we cannot redeclare let, const as var;
        // console.log("a inside if: ",a);
        console.log("b inside if: ",b);
        // console.log("c inside if: ",c);
    }
    // console.log("a outside if: ",a);
    console.log("b outside if: ",b);
    // console.log("c outside if: ",c);
}

foo();
console.log(b)

// initialization , redeclaration

const initFoo = () => {
    var b;
    var b;
    var b; // dosent throws any error
    let a;
    // let a; throws error as let cannot be redeclared
    // const c; throws error as const needs initialization
}

// initFoo()
// 

/*
*** Hoisting *** 

Hoisting is a JavaScript mechanism where variable and function 
declarations are moved to the top of their scope during the compilation phase.
This means you can use variables and functions before they are declared.

var : can be consoled before declaration with undefined
const , let : will be hoisted in temporal dead zone not accessible 
functions : will be hoisted completely even with definition

temporal dead zone : time period between the start of a block 
and the point where a variable is declared
*/

const hoisting = () => {
    console.log(a,"hoisting works");
    foo();
    // console.log(b,"hoisting works"); // in tdz cannot access before initialization
    // console.log(c,"hoisting works"); // in tdz cannot access before initialization
    var a = 1;
    if(1){
        var a = 10;
    }
    console.log(a,"out put based ");
    const b = 2;
    let c = 3;
    function foo() {
        console.log("function definition is also hoisted");
    }
}

// hoisting();

// reduce 

const arr = [1,2,3,4,5]

const sum = arr.reduce((acc,curr,i,arr)=>{
    // console.log("index : ",i)
    // console.log("arr[i]: ",arr[i])
    // console.log("acc: " + acc)
    // console.log("curr: " + curr)
    return acc + curr}) // with + without acc 
// console.log("sum : ",sum)
