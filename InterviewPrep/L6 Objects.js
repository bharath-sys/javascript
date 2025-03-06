// output based tricky
const a = {};
const b = { key: "b" }
const c = { key: "c" }
a[b] = 123; 
a[c] = 456;
a[b] = 100000; // considers b,c as '[object Object]' so it gets overwritten to last value
// console.log(a);
// console.log(a[b]);


const d = []
// console.log(typeof d)
a[d] = 100; // considers d as ''
// console.log(a['']);

// explain json.stringify and json.parse
const user = {
    name: "Piyush",
    age: 24,
};
const strobj = JSON.stringify(user);
// console.log(typeof strobj);
// console.log(typeof JSON.parse(strobj));
// localStorage.setItem("test", strobj);
// console.log(JSON.parse(localStorage.getItem("test")));

// console.log([..."kbk"])
// console.log({..."kbk"})

// stringify parts

const settings = {
    username: "Piyush",
    level: 19,
    health: 90,
};
const data = JSON.stringify(settings, ["level", "health"]); // only stringifies selected keys and returns only them ignoring username
// console.log(data);

// arrow vs normal func 

const circle = {
    radius : 10,
    diameter : function(){
        return this.radius * 2; // this refers to object on which function is called 
    },
    perimeter : ()=>{
        return this.radius * Math.PI * 2; // arrow function this refers to window object here 
    }
}
console.log(circle.perimeter(),"perimeter");
console.log(circle.diameter(),"diameter");

// destructuring

const student = {
    name : "bharath",
    age : 23,
    fullName : {
        first : "bharath",
        last : "kumar"
    }
}

const {name:username,age} = student // renaming ...
// console.log(username,age);

const {fullName:{first:firstName}} = student // nested destructuing + renaming
// console.log(firstName) 

function spreadRest(a,b,...c){
    return [...a,...b,...c];
}
// console.log(spreadRest(['apple','cat','bat'],['sugar'],'salt'));

let greet = {greetings:"hey"};
let referenceGreet;
let cloneGreet;

referenceGreet = greet;
cloneGreet = JSON.parse(JSON.stringify(greet));
greet.greetings = "hola!";
// console.log("clone greeting: ",cloneGreet)
// console.log("reference greeting",referenceGreet);
// console.log("old greetings",greet);

let person = {name: "John", age:21};
const users = [person];
person.name = null;
person = null;
console.log(users,person)

const objj = {
    a : {
        b : {
            name : "John",
            age : 21
        },
        name : "doe",
        age : 22
    },
    name : "bob",
    age : 23
}

const cloneObj = Object.assign({}, objj); // shallow copy : nested objects are still referenced to old objects
const cloneObj1 = JSON.parse(JSON.stringify(objj)); // deep copy
const cloneObj2 = {...objj} // shallow copy : nested objects are still referenced to old objects

objj.a.b.name = "new John"
objj.name = "new bob"

// console.log(cloneObj2,cloneObj1,cloneObj,objj)