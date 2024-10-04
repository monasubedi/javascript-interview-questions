//javascript engine executes the synchronous and then asynchronous codes.

console.log("start");

function importantAction(username){
    setTimeout(() => {
        return `Hello ${username}`
    }, 1000);
}

const message = importantAction("Mona Subedi");
console.log(message);
console.log("stop");

// //start
// //undefined
// //stop

// //how to get the message from the fun: above?
// //by passing callback function

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`Hello ${username}`);
//     }, 1000);
// }

// function greeting(timeperiod, cb) {
//     setTimeout(() => {
//         cb(`Good ${timeperiod}`)
//     }, 500);
// }

// importantAction("Mona Subedi", function (message) {
//     console.log(message);
//     greeting("Morning", (val) => {
//         console.log(val);


//     })

// });
//this is called callback hell because we have so many nested functions.

//Promises
// console.log("start");
// const sub = new Promise((resolve, reject) => {
//     const result = true;
//     if (result) resolve("Good Morning");
//     else reject(new Error("Good Afternoon"))
// });
// sub.then((res) => console.log(res)).catch((err) => console.log(err))


// function importantAction() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Subscribed to this channel.")
//         }, 1000);
//     })
// }

// function likeVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Like the ${video} video`)
//         }, 1000);
//     })
// }

// function shareVideo(video) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Share the ${video} video`)
//         }, 1000);
//     })
// }

// Promise.all([importantAction(), likeVideo("Javascript"), shareVideo("Javascript")]).then((res) => console.log(res)).catch((err) => console.log(err));
//Promise.all -> rejects all promises if one of the promises fails although the rest fullfills.
//Promise.race -> returns the first fulfilled or failed one.
//Promise.allSettled -> returns both fulfilled and rejected ones.
//Promise.any -> returns the first fulfilled ,ignore the failed ones.if all fails, rejects.


// console.log("start");
// const promise1 = new Promise((resolve,reject) => {
//     console.log(1);
//     resolve(2); 
// });

// promise1.then((res) => {
//     console.log(res);

// });
// console.log("end");
//start
//1
//end
//2



// console.log("start");
// const promise1 = new Promise((resolve,reject) => {
//     console.log(1);
//     resolve(2); 
//     console.log(3);
// });

// promise1.then((res) => {
//     console.log(res);

// });
// console.log("end");
//start
//1
//3
//end
//2


// console.log("start");
// const promise1 = new Promise((resolve,reject) => {
//     console.log(1);
//     console.log(3);
// });

// promise1.then((res) => {
//     console.log(res);

// });
// console.log("end");
//start
//1
//3
//end


// console.log("start");
// const fn = () => new Promise((resolve,reject) => {
//     console.log(1);
//     resolve("success"); 
// })

// console.log("middle");

// fn().then((res) => {
//     console.log(res);

// })

// console.log("end");

//start
//middle
//1
//end
//success


// function job() {
//     return new Promise(function (resolve, reject) {
//         reject();
//     })
// }

// let promise = job();

// promise.then(function () {
//     console.log("success 1");

// }).then(function () {
//     console.log("success 2");
// }).then(function () {

// }).catch(function () {

//     console.log("Error 1");

// }).then(function(){
//     console.log("success 3");

// })

//Error 1
//success 3

function job(state) {
    return new Promise(function (resolve, reject) {
        if (state) {
            resolve("victory");
        } else {
            reject("error");
        }
    });
}

let promise = job(true);

// promise.then(function (data) {
//     console.log(data);
//     return job(false);
// }).catch(function (error) {
//     console.log(error);
//     return "Error caught";
// }).then(function (data) {
//     console.log(data);
//     return job(true);
// }).catch(function (error) {
//     console.log(error);
// })

//success
//error
//Error caught
//

// promise.then(function (data) {
//     console.log(data);
//     return job(true);
// }).then(function(data){
//     if(data !== "victory"){
//         throw "Defeat";
//     }
//     return job(true);
// })
// .then(function(data){
//     console.log(data);
// })
// .catch(function (error) {
//     console.log(error);
//     return job(false);
// }).then(function (data) {
//     console.log(data);
//     return job(true);
// }).catch(function (error) {
//     console.log(error);
//     return "Error caught";
// })
// .then(function(data){
//     console.log(data);
//     return new Error("test");
// }).then(function(data){
//     console.log("Success ",data.message);
// }).catch(function(data){
//     console.log("Error",data.message);

// })
//success
//Defeat
//error
//Error caught
//Success test

//concept of promise chaining.
//create first promise that resolves the text with "first"
//create second promise that resolves the first promise.
//second promise is resolving the first promise, so when we do secondPromise.then, it is returning a new promise of first promise, that means return the promise and then do .then after it. that is called promise chaining.
// let firstPromise = new Promise((resolve, reject) => {
//     resolve("first");
// })

// let secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise);
// })

// secondPromise.then((res) => {
//     return res;

// }).then((res) => console.log(res)
//)

//Rewrite this example code using async/await instead of .then/.catch
// function loadJson(url) {
//     return fetch(url).then((response) => {
//         if(response.status == 200){
//             return response.json();
//         }
//         else{
//             throw new Error(response.status)
//         }
//     })
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
//     console.log(err);
// })

// async function loadJson(url) {
//     try {
//        let res = await fetch(url);
//        if(res.status == 200){
//         let json = await res.json();
//         return json;
//        } 
//        else{
//         throw new Error(res.status);
//        }
//     } catch (error) {
//         throw new Error(error);
//     }

// }
// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
//     console.log(err);
// }).then((res) => console.log(res)
// )

//Solve Promise Recursively
function promRecurse(funcPromises) {
    if (funcPromises.length === 0) return;

    const curPromise = funcPromises.shift();
    curPromise.then((res) => console.log(res));
    promRecurse(funcPromises);
}

