function evenNumber(number) {
    if (number % 2) {
        console.log(`${number} is odd`);
    } else {
        console.log(`${number} is even`);
    }
}
evenNumber(2);
evenNumber(5);
evenNumber(3);
evenNumber(24);
evenNumber(12);
evenNumber(17);
//Define a even function that has one numeric parameter and returns a boolean value
//This function must validate if the number passed as parameter is an even number or not (true or false)
//Call this function using the following parameters: 2, 5, 3, 24, 12
//If the number is even show the following message: %number% is even
//Else show the following message: %number% is odd