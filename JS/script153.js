const arithmetic = {
    add: function (num1, num2) {
        if (typeof num1 === "number" && typeof num2 === "number") {
            console.log("The result is " + (num1 + num2))
        } else {
            console.log("Error, please enter correct numbers")
        }
    },
    substract: function (num1, num2) {
        if (typeof num1 === "number" && typeof num2 === "number") {
            console.log("The result is " + (num1 - num2))
        } else {
            console.log("Error, please enter correct numbers")
        }
    },
    multiply: function (num1, num2) {
        if (typeof num1 === "number" && typeof num2 === "number") {
            console.log("The result is " + (num1 * num2))
        } else {
            console.log("Error, please enter correct numbers")
        }
    },
    divide: function (num1, num2) {
        if (typeof num1 === "number" && typeof num2 === "number") {
            console.log("The result is " + (num1 / num2))
        } else {
            console.log("Error, please enter correct numbers")
        }
    },
    remainder: function (num1, num2) {
        if (typeof num1 === "number" && typeof num2 === "number") {
            console.log("The result is " + (num1 % num2))
        } else {
            console.log("Error, please enter correct numbers")
        }
    }
}

//Create a new index153.js
//Define a arithmetic variable and assing a literal value with the following methods:
//add
//subtract
//multiply
//divide
//remainder
//Each method accepts 2 numeric parameters and shows the operation result
//So, add will add both numbers together and log the result (the rest of the methods work in the same way)
//Show an error if the parameters values are not numbers
//Call the methods:
arithmetic.add(2, 10);
arithmetic.substract(10, 5);
arithmetic.multiply(3, 100);
arithmetic.divide(40, 2);
arithmetic.remainder(20, 2);