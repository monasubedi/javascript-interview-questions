//Currying in Javascript

//Example f(a,b) into f(a)(b).

// function f(a) {
//     return function (b) {
//         return a + b;

//     }
// }
// console.log(f(5)(4));


//1 - sum(2)(6)(1)
// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

//2 - evaluate("sum")(4)(2) => 6
// evaluate("multiply")(4)(2) => 8
// evaluate("divide")(4)(2) => 2
// evaluate("subtract")(4)(2) => 2

// function evaluate(operation) {
//     return function (a) {
//         return function (b) {
//             if (operation === "sum") {
//                 return a + b;
//             }
//             else if (operation === "multiply") {
//                 return a * b;
//             }
//             else if (operation === "subtract") {
//                 return a - b;
//             }
//             else if (operation === "division") {
//                 return a / b;
//             }
//         }
//     }
// }

// console.log(evaluate("sum")(4)(2));


//3 - Infinite Currying -> sum(1)(2)(3)...(n)

// function sum(a) {
//     return function (b) {
//         if (b) {
//              return sum(a + b);
//         }
//         return a;
//     }
// }

// let s = sum(3);

// console.log(s(4)(6)());


//4. Difference between currying and partial application
// function sum(a){
//     return function(b,c){
//         return a + b + c;
//     }
// }
//this is called partial application
//nums of parameters = nums of return functions - currying
// function sum(a){
//     return function(b){
//         return function(c){
//             return a + b + c;
//         }
//     }
// }
//sum(a)(b)(c);


//5. Manipulating DOM
function updateElementText(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content;
    }
}

const updateHeader = updateElementText("heading");
updateHeader("Subscribe to RoadsideCoder");

//
function curry(func) {
    return function curriedFunc(...args) {
        if (args.length >= func.length) {
            return func(...args);
        }
        else {
            return function (...next) {
                return curriedFunc(...args, ...next);
            }
        }
    }
}