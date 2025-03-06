// Time Optimization

// without closure 
function find(idx) {
    let a = [];
    for(let i = 0; i < 1000000 ; i++) {
        a[i] = i*i;
    }
    console.log(a[idx]);
}

console.time('101');
find(101);
console.timeEnd('101');

// with closure

function findTo() {
    let a = [];
    for(let i = 0; i < 1000000 ; i++) {
        a[i] = i*i;
    }
    return function (idx) {
        console.log(a[idx]);
    }
}

const closure = findTo();
console.time('101');
closure(101);
console.timeEnd('101');

// memoisation
function add(initVal){
    let val = initVal;
    return (num)=>{
        val = val+num;
        return val;
    }
}
const sum = add(0);
console.log(sum(1));
console.log(sum(1));
console.log(sum(1));

/*
closure : closure is a function along with its lexical environment or variables of outer function (surrounding variables)
    a closure allows a function to access variables from its outer function's scope,
even after the outer function has finished executing.

Key Properties of Closures
Preserve State: Closures retain access to the variables from their scope.
Encapsulation: Closures can create private variables that are not accessible outside their function.
Dynamic Context: Each closure instance retains its own version of the environment.


*/



