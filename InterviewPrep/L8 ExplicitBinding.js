// call 

const obj = {
    name : 'Bharath',
    age : 21,
    printUser : function(...params){
        console.log(`useName is ${this.name} and age is ${this.age}`,params);
    }
}

obj.printUser.apply({name:'sheero',age:21},[1,2,3,4,5,6,7])

// obj.printUser(); // normal use 

// obj.printUser.call({name: 'sheero',age:4},"param1",2,"param3") // using call 

// apply

// difference bw call and apply is the way we pass the parameters

// obj.printUser.apply({name: 'brahm',age:10},["param1",2,"param3"]);

// bind

// bind is similar to call but returns callable function instead

const callable = obj.printUser.bind({name: 'janu',age:18},"param1",2,"param3")
// callable();

// 1.  append arr2 ro arr1 using explicit binding
const arr1 = [1,2,3];
const arr2 = [4,5,6];

// console.log(arr1,"arr1 before")
arr1.push.apply(arr1,arr2);
// console.log(arr1,"arr1 after")

// 2. min/max of arr using explicit binding

const min = Math.min.apply(null,arr1);
// console.log(min,"arr1 min");
const max = Math.max.apply(null,arr1);
// console.log(max,"arr1 max");

// 2 . bound funtion 

function f () {
    console.log(this);
}

const obj1 = {
    g:f.bind(null)
}

// obj1.g();

// polyfills

Function.prototype.myCall = function(context={},...args){
    if(typeof this!=="function"){
        return "method not callable";
    }
    context.fn = this;
    return context.fn(...args);
}

Function.prototype.myApply = function(context={},args){
    if(typeof this!=="function"){
        return "method not callable";
    }
    context.fn = this;
    return context.fn(...args);
}

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== "function") {
        return "method not callable";
    }
    context.fn = this;
    return () => context.fn(...args);
}

// obj.printUser.myCall({name: 'sheero',age:4},"param1",2,"param3")
obj.printUser.myApply({name:'sheero',age:21},[1,2,3,4,5,6,7])


const callable1 = obj.printUser.myBind({name: 'janu',age:18},"param1",2,"param3")
// callable1();


// const arr = [1,2,3,5]
// arr.splice(3,0,4);
// console.log(arr);
// arr.splice(3,3,5);
// console.log(arr);