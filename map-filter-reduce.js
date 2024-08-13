//map, filter and reduce

//Polyfill for map()

// Array.prototype.myMap = function (cb) {
//     let myArr = [];
//     for (let i = 0; i < this.length; i++) {
//         myArr.push(cb(this[i], i, this));
//     }
//     return myArr;
// }

// function myFun(curr, index, array) {
//     return curr * 3;
// }

//Polyfill for filter()
// Array.prototype.myFilter = function (cb) {
//     let myArr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) {
//             myArr.push(this[i]);
//         }
//     }
//     return myArr;
// }

//Polyfill for reduce()
// Array.prototype.myReduce = function (cb, initialValue) {
//     var accumulator = initialValue;
//     for (let i = 0; i < this.length; i++) {
//         accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];

//     }
//     return accumulator;
// }

// const nums = [1, 2, 3, 4, 5];
// const sum = nums.myReduce((acc, curr, i, arr) => {
//     return acc + curr;
// });

// console.log(sum);


let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "Kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },

];

// let data = students.map((stu) => {
//     return stu.name[0].toUpperCase()
// });
// let data = students.filter((stu) => stu.marks > 60);
// let sum = students.reduce((acc, cur, i) => {
//     return acc + cur.marks
// }, 0);
// let data = students.filter((stu) => stu.marks > 60).map((s) => s.name);
let total = students.map((stu) => {
    if (stu.marks > 60) {
        return stu;
    }
    else if (stu.marks < 60) {
        stu.marks += 20;
        return stu;
    }
}).filter((s) => s.marks > 60)
.reduce((acc, cur) => {
    return acc + cur.marks
}, 0);

console.log(total);