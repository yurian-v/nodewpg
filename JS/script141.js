const tripExpenses = [100, 200, 150]
    //{hotel: 100}, 
    //{trip: 200},
    //{meals: 150}
//]
//console.log(tripExpenses.length)
function budget(prevNum,curNum) {
  sum = prevNum + curNum;
  return sum;
}
 
const result = tripExpenses.reduce(budget, 0);

//tripExpenses.forEach( tripExpense => console.log(tripExpense) );
console.log("hotel: " + tripExpenses[0] + "  trip: " + tripExpenses[1] + "  meals: " + tripExpenses[2]);
console.log("Total trip budget: " + result);


//Define a tripExpenses array with the following values:
//The first item is hotel fee, it's a number, type a value that you like
//The second item is trip fee, it's a number, type a value that you like
//The third item is meals fee, it's a number, type a value that you like
//Define a budget variable and assign the sum of all the tripExpenses using reduce
//Show the tripExpenses items as output with the following format:
//hotel: %tripExpenses first item%, trip: %tripExpenses second item%, meals: %tripExpenses third item%
//Show the final budget items as output with the following format
//Total trip budget: %budget%