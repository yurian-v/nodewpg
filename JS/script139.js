let numbers = [];
for(i = 1; i < 1001; i++) {
    numbers.push(i);
 }

const oddNumbers = [];
const evenNumbers = [];

const isEven = function (number) {
  return number % 2 === 0;
};

const end = numbers.length;

for (let index = 0; index < end; index++) {
  const number = numbers[index];

  if (isEven(number)) {
    // evenNumbers.push(number);
    evenNumbers.push(number);
  } else {
    // oddNumbers.push(number);
    oddNumbers.unshift(number);
  }
}
oddNumbers.length = 10;
evenNumbers.length = 20;
numbers = [];
console.log('Odd: ', oddNumbers);
console.log('Even: ', evenNumbers);
// console.log('Numbers: ', numbers);
//numbers = numbers.concat(evenNumbers);
//numbers = numbers.concat(oddNumbers);
// console.log(oddNumbers.concat(evenNumbers));
//console.log(numbers.sort());

//Create a new index139.js file
//Define a numbers array with values between 1000 and 1
//Iterate over the numbers array and filter the following values creating new arrays for each type:
//Even numbers
//Odd numbers
//Show the last 10 odd numbers as output
//Show the first 20 even numbers as output