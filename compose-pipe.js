//Compose and Pipe

const addFive = (num) => {
    return num + 5;
}

const subtractTwo = (num) => {
    return num - 2;
}

const multiplyFour = (num) => {
    return num * 4;
}





function compose(...funs){
    return function(num){
        return funs.reduceRight((acc,cur,i) => {
            acc = cur(acc);
            return acc;
        },num)
    }
}

function pipe(...funs){
    return function(num){
        return funs.reduce((acc,cur,i) => {
            acc = cur(acc);
            return acc;
        },num)
    }
}

const evaluate = compose(addFive,subtractTwo,multiplyFour);

console.log(evaluate(5));

