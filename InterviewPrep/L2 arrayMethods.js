/*
1. map
2. filter
3. reduce 
*/

// ------------------------------------ map polyfill

Array.prototype.myMap = function(cb) {
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
        const newVal = cb(this[i],i,this);
        newArray.push(newVal);
    }
    return newArray;
}

const arr = [1,2,3,4,5];
const myMapArr = arr.myMap(x=>x*2);
// console.log(myMapArr,"new Map");

// ------------------------------------- filter polyfill

Array.prototype.myFilter = function(cb) {
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
        if(cb(this[i],i,this)){
            newArray.push(this[i]);
        }
    }
    return newArray;
};

const myFilterArr = arr.myFilter(x=>x>2);
// console.log(myFilterArr,"new FilterArr");

// ------------------------------------- reduce polyfill

Array.prototype.myReduce = function(cb,acc) {
    let accumulator = acc;
    for(let i = 0; i < this.length; i++) {
        accumulator = accumulator ? cb(accumulator,this[i],i,this) : this[i];
    }
    return accumulator;
}

const myReduceArr = arr.myReduce((acc,curr)=>{
    return acc+curr;
},0);

console.log(myReduceArr,"myReduceVal");

// const a = [];
// a[4] = 10;
// for(let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
// console.log(a)