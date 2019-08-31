let items = [
    number1 = 10, 
    number2 = 8,
    number3 = 25]
    let highToLow = false;
//items.sort((a, b) => a - b);
//console.log(items);
//items.sort((a, b) => b - a);
//console.log(items);
if (typeof number1 === "number" && typeof number2 === "number" && typeof number3 === "number") {
    if (highToLow === true) {
    items.sort((a, b) => a - b);
    console.log(items);
    } else if (highToLow !== true) {
    items.sort((a, b) => b - a);
    console.log(items);
    } 
} else {
    console.log('ERROR')
};




 //{
    //if (typeof number2 === "number" && typeof number1 === "number" && typeof number3 === "number") {
        //if ((number1,number2) => number1 - number2) {
            //console.log(sort)};
            //if ((number1,number2) => number2 - number1) {
                //console.log(sort)};
            //}
    //};
    //console.log(sort(10, 8, 25));

//Define a sort function that accepts 3 numeric parameters with the following names: number1, number2 and number3
//The function must sort the params values from lower to higher
//Call the function with the following parameters: 10, 8, 25
//Show the following result as output: 8, 10, 25
//Refactor the sort function to accept a fourth parameter with the name highToLow (boolean)
//If highToLow is true then you need to show the following output: 25, 10, 8
//Call the function again with the following parameters: 10, 8, 25, true number1,number2,number3,highToLow