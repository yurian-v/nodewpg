function biggerNumber(firstNumber,secondNumber) {
    //console.log (`The ${firstNumber} is bigger than ${secondNumber}`);
    if (typeof firstNumber == "number" && typeof secondNumber == "number") {
    if (firstNumber > secondNumber) {
            console.log (`The ${firstNumber} is bigger than ${secondNumber}`);
    } else if (secondNumber > firstNumber) {
            console.log(`The ${secondNumber} is bigger than ${firstNumber}`);
    } else {
            console.log(`Both numbers are ${firstNumber}`);
    }
    } else {
        console.log(`error`);
    }
}
biggerNumber(3,5);
biggerNumber(6,3);
biggerNumber(2,2);
biggerNumber(5,'one')
//Define a biggerNumber function that will expect two parameters with the name firstNumber and secondNumber (numeric)
//Call the biggerNumber and pass two numbers as parameters 3 for firstNumber and 5 for secondNumber
//The biggerNumber must the following output: Number %firstNumber% is bigger than %secondNumber%
//In this case you need to validate which number is bigger than the other to get the right feature and output
//Also add the validation to check if both numbers are equal, if so then show the following message: Both numbers are %number%
//Make sure that the parameters are numbers, you can use typeof for it
//Show a error message in case any of the parameters are not number
//Call the biggerNumber with the following parameters: 6 and 3
//Call the biggerNumber with the following parameters: 2 and 2