/*
Currying is the process of breaking down a function that takes multiple arguments,
into a series of functions that each take one argument.


Partial application is the process of fixing a few arguments of a function,
 producing a new function that takes the remaining arguments.


*/

// sum(5)(10)(20)

function currySum(a){
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}
// console.log(currySum(1)(2)(3));

// eval("sum")(10)(20)
// eval("mul")(10)(20)

function calculate(operation){
    return (a)=>{
        return (b)=>{
            switch(operation){
                case "sum": return a+b;
                case "mul": return a*b;
                default: return a-b;
            }
        }
    }
}
// console.log(calculate("sum")(10)(20));
// console.log(calculate("mul")(10)(20));
// console.log(calculate("sub")(10)(20));

// infinite currying

function infSum(a){
    return function (b){
        if(b==undefined){
            return a;
        }
        return infSum(a+b);
    }
}

// console.log(infSum(10)(20)(30)(40)());

// implement curry f(a,b,c) => f(a)(b)(c)

function curry(fn) {
    console.log(fn.length,"lenof foo");
    return function makeCurry(...args) {
        console.log(args.length,"args len");
        if (args.length >= fn.length) {
            return fn(...args);
        }
        else {
            return function (...next) {
                return makeCurry(...args, ...next);
            }
        }
    }
}
function foo(a, b, c, d) {
    return a + b + c + d;
}

const newFoo = curry(foo);
console.log(newFoo(10)(20)(30)(40))
