//"this" keyword in javascript(implicit binding)- is used to reference something

// this.a = 5;
// function getParam(){
//     console.log(this.a);

// }
// getParam();//this function will target to its parent object. in this case, the parent object is window object.

// let user = {
//     name:"Mona",
//     age: 24,
//     // getDetails(){
//     //     console.log(this.name);

//     // }
//     // getDetails: () => {
//     //     console.log(this.name);//in arrow function, this will take from its parent function and the parent function has access to its object. in this case, the parent function is window object.

//     // },
//     getDetails(){
//         const nestedArrFun = () => {
//             console.log(this.name);//Mona

//         }
//         nestedArrFun();
//     }
//     // childObj:{
//     //     newName: "Roadside Coder",
//     //     getDetails(){
//     //         console.log(this.newName,"and",this.name);//Roadside Coder and undefined

//     //     }
//     // }
// }
// user.getDetails();//inside the function, this will target to its immediate parent object.

// class User{
//     constructor(n){
//         this.name = n;
//     }
//     getName(){
//         console.log(this.name);

//     }
// }

// let user = new User("Mona");//this in class will target to the constructor.
// user.getName();


//Question 1: What is the output?
// const user = {
//     firstName: "Mona",
//     getName(){
//         const firstName = "Subedi";
//         return this.firstName;
//     }
// }
// console.log(user.getName());//Mona

//Question2: What is the result of accessing its ref? w
// function makeUser() {
//     return {
//         name: "Mona",
//          ref: this
        // ref(){
        //     return this;
        // }
       
//     }
// }

// let user = makeUser();//when we are calling this function, the parent object is the window object.
// console.log(user.ref().name)


//Question 3 - What is the Output?
// const user = {
//     name:"Mona Subedi!",
//     logMessage(){
//         console.log(this.name);
        
//     }
// }
// setTimeout(user.logMessage,1000);//undefined
// // setTimeout(() => {
// //     user.logMessage()
// // }, 1000);

//Question 5 - Create an object calculator
// let calculator = {
   
//     read(){
//         this.number = 10;
        
//     },
//     sum(){
//         this.number += 10;
//         return this.number;
//     },
//     mul(){
//         this.number *= 10;
//         return this.number;
//     }
// }
// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

//Question 6 - What will be the Output?
// var length = 4;
// function callback(){
//   console.log(this.length);
// }

// const object = {
//     length:5,
//     method(){
//         // fn(); arguments= [callback,2,3]=> array itself is an object
//         console.log(arguments[0]);// {function callback(){ console.log(this.length)}, 2 , 3}
        
        
//         arguments[0]();

//     }
// }
// object.method(callback,2,3);//4

let calc = {
    number:0,
    add(num2){
        this.number += num2;
        return this;
    },
    multiply(num2){
        this.number *= num2;
        return this;
    },
    subtract(num2){
        this.number -= num2;
        return this;
    }

}



let total =calc.add(10).multiply(5).subtract(30).add(10);
console.log(total.number);
