//var vs let vs const
//Scope

//variable shadowing
// function test() {
//     let a = "Hello";

//     if (true) {
//         let a = "Hello";
//         console.log(a);
//     }
//     console.log(a);
// }

// illegal shadow
// Var variable by using let can be shadowed. But let variable by using var cannot be shadowed. It will throw error.

// function test() {
//     var a = "Hello";
//     // let b = "Bye";

//     if (true) {
//         let a = "Hi";
//         // var b = "Goodbye";//throw error
//         console.log(a);
//         console.log(b);
//     }
// }


//Declaration
//while declaration
// var a;//ok
// var a;

// let a;//ok
// let a;

// const a;//we need to provide some initialization while declaring it
// const a;

//javascript executes the codes in two phases (Javascript Execution Context), Creation Phases, Execution Phases
// In creation phase, three steps happens. First step, it creates a global or window object. In second step, it takes the variables and functions and store it in memory heaps. In third step, it assigns undefined to those varialbes.
// In execution phase, it executes the codes line by line. And then assigns the actual value to it.


//Hoisting
//during the creation phase, javascript engine moves your variables and function declarations to top of the code. This is known as hoisting.


console.log(count);
var count = 1;// var is hoisted in global object.
let count2 = 2;// let is hoisted in temporal dead zone. temporal dead zone is between the declaration and initialization.

function example() {
    console.log(a, b, c);
    const a = 3;
    let b = 5;
    var c = 2;
}
example();



