// const info = {
//     name:"Mona",
//     age:16,
//     "learn about objects":true
// }
// delete info.age;

// console.log(info);
// //if we want to add key that includes space, add quotes and how to access it?like this->
// //info["learn about objects"]



// const func = (function(a){
//     delete a;
//     return a;
// })(5);

// console.log(func);

//we can only delete the object- not the local variable.

//how to add dynamic property?
// const property = "firstName";
// const name = "Mona";

// const user = {
//     [property]:name
// }

// console.log(user);

// const obj = {
//     a: "one",
//     b: "two",
//     a: "three"
// };

// console.log(obj);//with the same key , it will replace the first one.


// let nums = {
//     a:100,
//     b:200,
//     title:"My nums"
// }


// function multiplyNumeric(nums){
//     for(let i in nums){
//         if(typeof nums[i] === "number"){
//             nums[i] = nums[i] * 2;
//         }
//     }
// }
// multiplyNumeric(nums);
// console.log(nums);



// const a = {};
// const b = {key:"b"};
// const c = {key:"c"};

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);//123;

// //a["[Object Object]"] = 123;// when it tries to convert object to string,this will happen.
// //a["[Object Object]"] = 456

// console.log([..."Mona"]);//["M","o","n","a"]

//What's the output?

// const settings = {
//     username: "Mona",
//     level: 19,
//     health: 90
// }

// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);//{"level":19,"health":90}


// const shape = {
//     radius:10,
//     diameter(){
//         return this.radius * 2;
//     },
//     perimeter:() => 2 * Math.PI * this.radius
// };
// console.log(shape.diameter());//20 this will point to its parent object.(normal function)
// console.log(shape.perimeter());//Nan this will point to the window object.(arrow function)

// let user = {
//     name: "Piyush",
//     age: 24
// };
// const {name,age} = user;//destructuring object

let c = {greeting:"Hey!"};
let d;

d = c;//we are basically assigning the reference to it.
c.greeting = "Hello";
console.log(d.greeting);//"Hello"


// console.log({a:1} == {a:1});//false
// console.log({a:1} === {a:1});//false -> javascript compares objects by reference, not by values, they are independent objects and have different reference in memory.


// let person = {name:"Mona"};
// const members = [person];
// person = null;

// console.log(members);//[name:"Mona"] because members[0]= {name:"Mona"} and it is not doing like this person.name=null, if it is like that, then it will affect the members also. Have to be careful about it.


// const value = {number:10};

// const multiply = (x={...value}) => {
//     console.log((x.number *= 2));
    
// }
// multiply();//20-> it clones the object
// multiply();//20
// multiply(value);//20 -> it has reference
// multiply(value);//40


// function changeAgeAndReference(person){
//     person.age = 25;
//     person = {
//         name:"John",
//         age: 50
//     }
//     return person;
// }

// const personObj1 = {
//     name:"Alex",
//     age:30
// }

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); // -> ?{name:"Alex",age:25}
// console.log(personObj2); // -> ?{name:"John",age:50}


//What's Shallow copy and Deep copy?
// let user ={
//     name:"Mona",
//     age:24
// }
// let b = a//shallow copy

//Deep copy
// const objClone = Object.assign({},user);
// const objClone = JSON.parse(JSON.stringify(user));
// const objClone = {...user};

