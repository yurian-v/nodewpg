let numbers = [];
for(i = 1; i < 1001; i++) {
    numbers.push(i);
}

const newnumbers = numbers.map(function(number) {
  return number+=10;
});
const ornumbers = numbers.values();
for (let number of ornumbers) {
    console.log(number);
    
  }
const eArr = newnumbers.values();
for (let newnumber of eArr) {
  console.log(newnumber);
}
console.log(number + newnumber);


//Define a numbers array with values between 1 and 1000
//Iterate over each numbers item using map and increment the value in 10
//If value is 1 then it should be 11
//If value is 2 then it should be 12
//and so on..
//Show the following output for each element:
//index: 1, original number: 1, incremented value: 11