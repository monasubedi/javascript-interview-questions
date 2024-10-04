//event-loop is made up of Call Stack, Microtask Queue, Callback Queue.
//Microtask Queue manages high priority stuff i.e promises
//Callback queue or task queue manages settimeout, dom interaction.

//javascript is a single-threaded language. it executes synchronous codes and then asynchronous. e.g-
// console.log("1");
// setTimeout(() => {
//     console.log("2");

// }, 0);
// console.log("3");
//1
//3
//2
//synchronous codes are added to the Call Stack.LIFO.
//settimeout(anonymous function) is added to the task queue. FIFO.




// console.log("start");

// setTimeout(() => {
//     console.log("Inside setTimeout (macro-task)");

// }, 0);


// Promise.resolve().then(() => {
//     console.log("Inside Promise (micro-task)");

// });

// console.log("End");
//start
//end
//Inside Promise (micro-task)
//Inside setTimeout (macro-task)


//Quest-1 What is Event Loop?
//Javascript is a single threaded and the event loop is responsible for how its asynchronous behavior happens.

//Quest-2 What do we need event loop to manage these task queue and microtask queue?


//Quest-3
// blockMainThread();
// console.log("Start");

// function blockMainThread(){
//     const start = Date.now();
//     while(Date.now() - start < 3000){
//         console.log("running...");

//     }
// }
// console.log("End");


// setTimeout(function a() {
//     console.log("a");

// }, 1000);

// setTimeout(function b() {
//     console.log("b");

// }, 500);

// setTimeout(function c() {
//     console.log("c");

// }, 0);

// function d(){
//     console.log("d Runs.");

// }
// d();

//task queue - a b c //although we think a will execute first, the time of c comes earlier, then b , then a.
//call stack - d
//d Runs
//c
//b
//a



//Quest-5
// function a(){
//  for (var i = 0; i < 5; i++) {
//    setTimeout(function log() {
//     console.log(i);
//    }, i * 1000);

//  }
// }
// a();

//task queue - log()  log() log()
//             i        i     i
//var has reference of i, not value.
//when the loop finishes, after time, it prints the value.

// let blocks = [
//     {
//         "gym":false,
//         "school":true,
//         "store":false
//     },
//     {
//         "gym":true,
//         "school":false,
//         "store":false
//     },
//     {
//         "gym":true,
//         "school":true,
//         "store":false
//     },
//     {
//         "gym":false,
//         "school":true,
//         "store":false
//     },
//     {
//         "gym":false,
//         "school":true,
//         "store":true
//     }
// ]
// function findMinimalIndex(blocks){
//     let obj = {};
//     for(let i = 0; i < blocks.length; i++){
//         for(let key in blocks[i]){
//             if(blocks[i][key] === true){

//                 obj[key] = i;
//             }
//         }

//     }
//     return obj;
// }
// console.log(findMinimalIndex(blocks));
// Promise.resolve().then(function a() {
//     Promise.resolve().then(function d() {
//         console.log("d Runs");
//     });
//     Promise.resolve().then(function e() {
//         console.log("e Runs");
//     });
//     throw new Error("Error occured!")
//     Promise.resolve().then(function f() {
//         console.log("f Runs");

//     })

// }).catch(function b() {
//     console.log("b Runs");

// }).then(function c() {
//     console.log("c Runs");

// })
//d Runs
//e Runs
//b Runs
//c Runs

Promise.resolve().then(function a() {
    Promise.resolve().then(function d() {
        setTimeout(() => {
            console.log("d Runs");
        }, 0);  
    });
    Promise.resolve().then(function e() {
        console.log("e Runs");
    });
    throw new Error("Error occured!")
    Promise.resolve().then(function f() {
        console.log("f Runs");

    })

}).catch(function b() {
    console.log("b Runs");

}).then(function c() {
    console.log("c Runs");

})
//microtask queue a() e() b() c()

//call stack     a() 
//task queue     d()
//e Runs
//b Runs
//c Runs
//d Runs

function pause(millis){
    return new Promise(function p(resolve){
        setTimeout(() => {
            resolve("resolved");
        }, millis);
    })
}

const start = Date.now();
console.log("Start");

pause(1000).then((res) => {
    const end = Date.now();
    const secs = (end - start) / 1000;
    console.log(res, ":", secs);
    
})
