// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickMeButton");
  
    // Add a click event listener
    button.addEventListener("click", () => {
      alert("Button clicked!");
    });
  });

// .this example 

var length = 4;

function callback(){
    console.log(this.length);
}

const obj = {
    length : 5,
    method(){
        arguments[0](); // prints arguments array.length 
    }
}

// obj.method(callback,2,3);

var status = "global";
setTimeout(()=>{
    const status = "outerFunction";
    const obj = {
        status : "objectScope",
        getStatus(){
            console.log(this.status)
        }
    }
    obj.getStatus.call(this)
},0)

console.log(this)