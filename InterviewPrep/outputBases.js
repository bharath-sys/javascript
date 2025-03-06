// Q1. setTimeout + for loop + let,var scoping 

function b() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}
// b();



function a(){
    for (var i = 0; i < 5; i++) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
}
// a();

function a1() {
    for (var i = 0; i < 5; i++) {
        (function (idx) {
            setTimeout(() => {
                console.log(idx);
            }, idx * 1000);
        })(i);
    }
}

function test() {
    var func = [];
    for(var i = 0; i < 10; i++) {
        func[i] = function () {
            return i;
        };
    }
    return func;
}

var funcs = test();
console.log(funcs[1]());

function testIIFE() {
    var func = [];
    const helper = (j)=>{
        func[j] = function () {
            return j;
        };
    };
    for(var i = 0; i < 10; i++) {
        // (function (j) {
        //     func[j] = function () {
        //         return j;
        //     }
        // }
        // )(i)
        helper(i);
    }
    return func;
}

var funcs1 = testIIFE(); // can be also done by let and helper foo
// console.log(funcs1[5]());
