// function square(number) {
//     return number * number;
// }//function declaration, function statement, function definition

// const square = function (num) {
//     return num * num;
// }//function expression

//What are First Class Functions?
//Functions can be treated as variables.They can assigned to a variable, can be passed as arguments to a functions and manipulate them.

//What is IIFE?
//     (function display() {
//         console.log("something");
//     })();

// (function (x) {
//      (function (y) {
//         console.log(x);
//     })(2);
// })(1);

// for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, i * 1000);
// }
//with let- it will print 0,1,2,3,4 (because let creates block scope)
//with var - it will print 5,5,5,5,5 (becuase var does not create block scope)



//- Function Hoisting
// function functionName() {
//     console.log("Mona Subedi");
// }
// functionName();

// Function Hoisting is a little bit different than the variable hoisting. Functions is hoisted completely.

// var x = 21;

// var fun = function () {
//     console.log(x);
//     var x = 20;
// }
// fun();//undefined

// function multiply(...nums) {
//     console.log(nums[0] * nums[1]);
// }

// var arr = [5, 6];

// function multiply(...nums) {//rest operator
//     console.log(nums[0] * nums[1]);
// }

// var arr = [5, 6];
// multiply(...arr);//spread operator

// const fn = (a,...numbers,x,y) => {
//     console.log(x,y);
// }

// fn(5,6,3,7);//this will throw an error. since rest parametes must be last

//What si Callback function

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

//Difference between arrow functions and regular functions
let user = {
    username: "Mona Subedi",
    rc1: () => {
        console.log("Hi" + this.username);
    },
    rc2(){
        console.log("Hello " + this.username);
    }
}
user.rc1();
user.rc2();

//1 -> syntax difference
//2 -> in arrow function, can omit return keyword
//3 -> in regular function, can access arguments without even passing it 
//4 -> in regular function, can access this keyword.