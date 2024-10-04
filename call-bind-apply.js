//Call,Bind and Apply in Javascript(Explicit Binding)
//Question:What is Call?

// var obj = {
//     name: "Mona"
// };

// function sayHello() {
//     return "Hello " + this.name + "is " + this.age;
// }
// console.log(sayHello.call(obj, 24));

// //Question: What is Apply?
// //Apply works the same as Call, but it passes the arguments in an array.
// console.log(sayHello.call(obj), [24, "Frontend Developer"]);

// //Question: What is Bind?
// const bindFunc = sayHello.bind(obj);
// bindFunc(24, "Software Developer");

//Question 4 - What is the output?
// const person = {name:"Mona"};

// function sayHi(age){
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person,24));
// console.log(sayHi.bind(person,24)());

//Question 5 - What is the output?
// const age = 10;

// var person = {
//     name: "Mona",
//     age:20,
//     getAge: function(){
//         return this.age;
//     }
// }

// var person2 = {age:24};
// console.log(person.getAge.call(person2));

//Question:6
//  this.status = "happy";

// setTimeout(() => {
//     const status = "love";

//     const data = {
//         status:"chill",
//         getStatus(){
//             return this.status;
//         }
//     }
//     console.log(data.getStatus());//chill
//     console.log(data.getStatus.call(this));
    
// }, 0);

//Question 7
// const animals = [
//     {species:"Lion",name:"King"},
//     {species:"Whale",name:"Queen"}
// ];

// function printAnimals(i){
//   this.print = function(){
//     console.log("#" + i + " " + this.species + ": " + this.name);
    
//   }
//   this.print();
// }

// animals.map((animal,i) => {
//     return printAnimals.call(animal,i);
// })

//Question 8 - Append an array to another array

// const array = ["a","b"];
// const elements = [0,1,2];

// array.push.apply(array,elements);

//Find min/max number in an array
// const numbers = [5,6,2,3,7];
// console.log(Math.max.apply(null,numbers));

//Question 10 - Bound function

// function f(){
//     console.log(this);
    
// }

// let user = {
//     g: f.bind(null),
// }
// user.g();//although we pass null, it will reference to window object.

// function f(){
//     console.log(this.name);
    
// }

// f = f.bind({name:"John"}).bind({name:"Ann"});
// f();

function checkPassword(success,failed){
    let password = "Roadside Coder";
    if(password == "Roadside Coder") success(true);
    else failed(false);
}

// let user = {
//     name:"Mona Subedi",

//     loginSuccessful(){
//         console.log(`${this.name} logged in`);
        
//     },
//     loginFailed(){
//         console.log(`${this.name} failed to log in`);
        
//     }
// }

// checkPassword(user.loginSuccessful.bind(user),user.loginFailed.bind(user));

// let user = {
//     name:"Mona Subedi",

//     login(result){
//         console.log(this.name + (result ? " login successful" : " login failed"));
        
//     }
// }
// checkPassword(user.login.bind(user),user.login.bind(user));

const age = 10;

var person = {
    name:"Mona",
    age:20,
    getAgeArrow:() => console.log(this),
    getAge:() => console.log(this.age),

    
}

var person2 = {age:24};
person.getAgeArrow.call(person2);//undefined
person.getAge.call(person2);//20

//polyfill for call
Function.prototype.myCall = function(context={},...args){
    if(typeof this !== "function"){
        throw new Error(this + "is not callable");
    }
    context.fn = this;
    context.fn(...args);
    
}

//polyfill for apply
Function.prototype.myApply = function(context = {}, args = []){
    if(typeof this !== "function"){
        throw new Error(this + "It's not callable.");
    }
    if(!Array.isArray(args)){
        throw new Error("It is not array.");
    }
    context.fn = this;
    context.fn(...args);
}

//polyfill for bind
Function.prototype.myBind = function(context ={}, ...args){
    if(typeof this !== "function"){
        throw new Error(this + "It cannot be bound as it is not callable.");
    }
    context.fn = this;
    return function(...newArgs){
        return context.fn(...newArgs);
    }
}