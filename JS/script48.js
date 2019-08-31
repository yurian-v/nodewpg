const message = "3.14 it's a great number but 42 it's the answer to life.";
let pi = message.charAt(0);
pi += message.charAt(1);
pi += message.charAt(2);
pi += message.charAt(3);
const piasanum = parseFloat(pi);
console.log(piasanum);
let answerToLife = message.charAt(29);
answerToLife += message.charAt(30);
const answerToLifeasanum = parseFloat(answerToLife);
console.log(answerToLifeasanum);
const result = piasanum + answerToLifeasanum;
console.log(" result is ", result.toString());


let pi1 = message.slice(0.3);
let answerToLife1 =message.slice(29,31);
const pi1asanum = parseFloat(pi1);
const answerToLife1asanum = parseFloat(answerToLife1);
console.log(pi1asanum);
console.log(answerToLife1asanum);
const result1 = pi1asanum + answerToLife1asanum;
console.log(" result is# ", result1.toString());


//Create a new index48.js file
//Declare a message variable and assign the following value: 3.14 it's a great number but 42 it's the answer to life.
//Declare a pi variable, get 3.14 value from the message variable and transform it into a decimal number type value
//Declare a answerToLife variable, get 42 value from the message variable and transform it into a integer number type value
//Declare a result value and assign the result of adding pi and answerToLife values
//Show the result variable value and name as output (use console.log(variable name, variable value))
//Show the following output: 45.14 is the result of adding pi and answerToLife
//Concatenate the strings and transform 45.14 (result value) from number to string using toString method

