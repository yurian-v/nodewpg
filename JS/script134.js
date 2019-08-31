let numbers = [];
for(i = 1; i < 1001; i++) {
    numbers.push(i);
 }

console.log(numbers);
//console.log(numbers.length());
let sum = 0;
for(i = 0; i < numbers.length; i++) {
    sum += numbers[i];
 }
 console.log(sum);
if(sum == 500500) {
    console.log("GOOD JOB!!!");
} else {
    console.log('Take a look to see if something is wrong');
}

 



//let x = 1;
//let y = 0;
//while (x < 1001) {
//y = y + x ;
//console.log("partial res", y);
//x++;
//}

//Create a new index134.js file
//Define a numbers array
//Assign values between 1 and 1000
//Iterate over the numbers array and add all numbers items
//On each iteration show the partial result
//1
//3
//6
//... so on
//If the final result equals 500500 then show the following output: Good job!!!
//Else show: Take a look to see if something is wrong