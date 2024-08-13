//local scope - 
// var username = "Mona Subedi";
// function local() {
//     //local scope
//     console.log(username);

// }
//global scope
//lexical scope - the variable inside of the function have access to the variable outside of the function- that is called lexical scope.(closures) In Javascript, closures are created everytime a function is created.


// function subscribe() {
//     var name = "Mona Subedi";

//     (function displayName() {
//         alert(name);
//     })();
// }
// subscribe();


//closure scope chain
//Every closure has three scopes - local scope, outer functions scope, global scope


//1. What will be logged to console?
// let count = 0;
// (function printCount() {
//     if (count === 0) {
//         let count = 1;
//         console.log(count);

//     }
//     console.log(count);

// })();


//2. Write a function that would allow you to do this.
// var addSix = createBase(6);
// addSix(10);//returns 16
// addSix(21);//returns 27

// function createBase(num) {
//     return function addSix(num2) {
//         return num + num2;
//     }
// }


//3. Time Optimization
// function find(index) {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i;
//     }
//     console.log(a[index]);

// }

// function findWithClosure() {
//     let a = [];
//     for (let i = 0; i < 100000; i++) {
//         a[i] = i * i;
//     }
//     return function (index) {

//         console.log(a[index]);

//     }
// }
// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("12");
// find(12);
// console.timeEnd("12");

// const findByIndex = findWithClosure();



// console.time("6");
// findByIndex(6);
// console.timeEnd("6");
// console.time("12");
// findByIndex(12);
// console.timeEnd("12");


//4: Block scope and setTimeout
// function a() {
//     for (var i = 0; i < 3; i++) {
//          function inner (i) {
//             setTimeout(() => {
//                 console.log(i);

//             },i * 1000);
//         }
//         inner(i);
//     }
// }
// a();


//5. How would you use a closure to create a private counter?
// function counter() {
//     var _counter = 0;
//     function increase(num2) {
//         _counter += num2;
//     }
//     function decrease(num2) {
//         _counter -= num2;
//     }
//     function retrieve() {
//         return _counter;
//     }
//     return {
//         increase,
//         decrease,
//         retrieve
//     }
// }
// let count = counter();
// count.increase(30);
// count.decrease(10);
// console.log(count.retrieve());

// //6: What is Module Pattern?
// var Module = (function () {
//     function privateMethod() {
//         //do something
//     }
//     return {
//         publicMethod: function () {
//             //can call privateMethod();
//         }
//     };
// })();


//Make this run only once.
// let view;
// function likeTheVideo(){
//     view = "Roadside Coder";
//     console.log("Subscrit to", view);

// }

// likeTheVideo();
// likeTheVideo();
// likeTheVideo();
// likeTheVideo();

// let view;
// function likeTheVideo() {
//     let alreadyRun = 0;
//     return function () {
//         if (alreadyRun === 0 ) {
//             view = "Roadside Coder";
//             console.log("Subscribe to", view);
//             alreadyRun++;
//         }
//         else{
//             console.log("Already run");

//         }


//     }


// }
// const likeVideo = likeTheVideo();
// likeVideo();
// likeVideo();
// likeVideo();
// likeVideo();



//polyfill for once

// function once(func, context) {
//     let ran;
//     return function () {
//         if (ran !== null) {
//             func.apply(context || this,arguments);
//             ran = null;
//         }
//     }
// }

// const hello = once((a,b) => console.log("hello",a,b));
// hello(1,2);
// hello();
// hello();


//create a memoized function

const clumsysquare = (num1, num2) => {
    for (let i = 1; i <= 100000000; i++) {

    }
    return num1 * num2;
};

function memoize(func, context) {
    let obj = {};
    return function (num1, num2) {
        let key = JSON.stringify(num1, num2);
        let value;
        if (!obj[key]) {
            value = func.apply(context || this, arguments);
            obj[key] = value;
        }
        return obj[key];

    }
}

const mem = memoize(clumsysquare);

console.time("First call");
console.log(mem(9467, 3434));
console.timeEnd("First call");

console.time("Second call");
console.log(mem(9467, 3434));
console.timeEnd("Second call");

console.time("First call");
console.log(mem(999, 999));
console.timeEnd("First call");

console.time("Second call");
console.log(mem(999, 999));
console.timeEnd("Second call");







