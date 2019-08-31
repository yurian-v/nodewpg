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
