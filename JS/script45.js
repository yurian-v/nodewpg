let playerName = "Patrik Laine is lame";
let teams = "New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins";
let message = "Winnipeg is the best Canadian city, Go Winnipeg";
let result1 = playerName.slice(0, 12);
let result11 = playerName.slice(13, 15);
let result2 = teams.charAt(46);
let result2char = result2.toUpperCase();
let result2rest = teams.slice(47, 50);
let result3 = message.slice(12, 20);
let result4 = message.slice(36, 38);
let template = `${result1.toUpperCase()} ${result11} ${result3} ${result2char}${result2rest} player, ${result4} Jets ${result4}!!`;
console.log(template);
//Create a new index45.js file
//Define a playerName variable with the following value: Patrik Laine is lame
//Define a teams variable with the following value: New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins
//Define a message variable with the following value: Winnipeg is the best Canadian city, Go Winnipeg
//Use the slice method to get the following words or phrases from the previous variables:
//Patrik Laine is
//jets
//the best
//, Go
//Use a template variable to create the final result
//Change the first jets character to be Capitalized
//Create all the variables that you might need to accomplish this objective
//The final output must be: PATRIK LAINE is the best Jets player, Go Jets!!