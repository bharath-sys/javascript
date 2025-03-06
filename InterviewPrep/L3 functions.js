// Q1. diff between arrow functions ans normal functions 
/*
A1.
 syntax 
 arguments keyword
 implicit return keyword
 how this works
*/

// Q2. diff between rest and spread operators 
/*
A2. 
rest operator is used to merge params in function definition ex : function foo(...params) { }
rest operator must be last paramter in function definition.
spread operator is used to sepereate arguments in function call : foo(...args);
*/

// Q3. what are call backs 
/*
A3.
functions which are passed to other functions as arguements and invoked by outer function 
*/

// Q4. whare are iife 
/*imediately invoked function expressions*/
(function foo(param){
    return (function innerfoo(innerParam){
        console.log("this is iife",param,innerParam);
    })(1);
})(2);

// Q5. what are first class functions 
/*
functions in js can be passes as params to other functions same as variables 
1. assigned to a variable
2. passed as an argument to a function
3. returned from a function 
*/

function printOp (foo,...args){
    return foo(args);
}
function sum (nums){
    console.log(arguments)
    return nums.reduce((a,c)=>a+c);
}

console.log(printOp(sum,1,2,3,4,5));

// Q6. what are anonymous functions 

/* 
Anonymous functions are functions without a name. 
They are often used when you need a function for a specific task 
and don't want to define a named function.
*/

const anonymousFoo = function () {
    console.log("Anonymous function");
}

setTimeout(()=>{console.log("anonymous function")},1000)



// Q7. what is function expression and function declration

test(1,2,3,4,5)
function test(...params){
    console.log(params);
} // function declaration + hoisted 

// test1();
// cannot access test before initialization if we use let,const & not a function is we use var as function expression is not hoisted
const test1 = function(...params){
    console.log(params);
}




