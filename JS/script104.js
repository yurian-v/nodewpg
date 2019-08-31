const fibonacci = function () {
    let fib1 = 1;
let fib2 = 1;
console.log(fib2);
let n = 10;
for (let i = 1; i <= n; i++) {
    fib_sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib_sum;
    console.log(fib2)
}
}
fibonacci();
fibonacci();
fibonacci();
//reate a new index104.js file
//Define a fibonacci variable and assign a function value
//When executing the fibonacci function it will print the 10 first fibonacci sequence numbers as output
//Execute this function 3 times