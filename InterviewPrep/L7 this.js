/* this refers to the object that is executing the current function
its value is dependent on the context in which it is used

Key Takeaway
 * Arrow functions inherit this from their enclosing scope.
 * Regular functions bind this dynamically, depending on how they are called.
 * In objects, if you need this to refer to the object itself, use a regular function, not an arrow function.

*/


// 1 . this in normal functions vs this in arrow function

function test1(){
    console.log(this); // output would be window obj in browser and global in node
}

const test2 = ()=>{
    console.log(this); // output would be {} in node and global in browser
}

// both are same when called at global level

// test1();

// test2();


// 2. this in object 

const user = {
    name : 'Bharath',
    age : 21,
    getDetails : function(){
        console.log(`${this.name} and age ${this.age}`);
    },
    getDetailsArrow: ()=>{
        console.log(`${this.name} and age ${this.age}`,this);
    },
    nestedObj : {
        nestedName : 'Sheero',
        nestedAge: 4.5,
        getDetailsNested: function(){
            console.log(`outer : ${this.name} || inner : ${this.nestedName}`,this);
        }
    },
    arrowOuterNormalFoo: function (){
        const arrowFun = ()=>{
            console.log(this)
        }
        arrowFun();
    }
}

user.getDetails() // outputs Bharath 21 with user obj as this

user.getDetailsArrow();  //  this is {} in node and global in browser

user.nestedObj.getDetailsNested(); // this refers to inner nested object here 

user.arrowOuterNormalFoo();  // outputs user context as it is the context for the outer normal function

// ***  as arrow function does not have any this it searched for this in its lexical scope || outer normal function

setTimeout(user.getDetails,2000) // this will be global after 2 seconds

setTimeout(()=>{user.getDetails()},2000) // this will not be global after 2 seconds

// Why Does this Change in Case 1?
// In JavaScript, the value of this depends on how a function is called, not where it is defined. When user.getDetails is passed directly to setTimeout, it becomes a detached function, and the calling context (which determines this) changes to the global context (or undefined in strict mode).

// In contrast, when you wrap the call in an arrow function or explicitly bind it, you control the value of this.



// Arrow functions inherit this from their enclosing scope.
function Timer() {
    this.seconds = 0;
    setTimeout(() => {
        this.seconds++;
        console.log(this.seconds); // `this` refers to the Timer instance
    }, 3000);
}

// const timer = new Timer();

function makeUser() {
    return {
      name: "John",
      ref: this ,// this refers to window || gloabal object 
      ref1: function () {
        return this; // this fixes above bug and its follow up question
      }
    };
  }
  
let user1 = makeUser();
  
// console.log(user1.ref1().name); // What's the result?

// ****

let length = 4;

function callback(){
    console.log(this.length);
}

const obj = {
    length : 5,
    method(fn){
        fn();
    }
}

// obj.method(callback); refer in browser

const calc = {
    val : 0,
    add(number){
        this.val += number;
        return this;
    },
    mul(number){
        this.val *= number;
        return this;
    },
    sub(number){
        this.val -= number;
        return this;
    },
    div(number){
        this.val /= number;
        return this;
    }
}

// console.log(calc.add(2).mul(4).sub(4).div(2).mul(2).val);

promise1 = ()=>new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))


var addTwoPromises = async function(promise1, promise2) {
    const a = await promise1();
    const b = await promise2;
    console.log(a,b);
    return a+b;
};

//   addTwoPromises(promise1, promise2).then(res=>console.log(res))