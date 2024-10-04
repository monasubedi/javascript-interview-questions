//debounce -> it limits the execution of function call and waits for a certain amount of time before running it again.

const myDebounce = (cb, d) => {
    let timer;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            cb(...args);
        }, d);
    }
}
let a = myDebounce(function(a){
    console.log("hello",a);
    
},500);
a();

const myThrottle = () => {
    let last = 0;
    return function(...args){
        let now = new Date().getTime();
        if(now - last < d) return;
        last = now;
        return cb(...args);
    }
}