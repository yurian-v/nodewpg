const mutants = ['Professor X', 'Cyclop', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
console.log(mutants);

const replaced = mutants.splice(0, 1, "<3 Professor X");
const replaced1 = mutants.splice(6, 3, "<3 Phoenix", "<3 Logan", "<3 Gambit");

console.log(mutants);



//Create a new index138.js file
//Define a mutants array with the following values:
///Iterate over the mutants array
//Add <3 symbol before the mutant name if the iterated name is one of the following:
//Professor X
//Logan
//Phoenix
//Gambit
//Show the original mutant array items as output
//Show the updated mutant array items as output