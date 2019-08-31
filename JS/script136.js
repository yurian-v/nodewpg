const mutants = ['Professor X', 'Cyclop', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
mutants.forEach(function(student, index) {
    console.log(student, index);
});

const removed = [];
let remove = mutants.splice(6,2);
//console.log('removed', remove);
let remove1 = mutants.splice(2,1);
let removedcount = removed.unshift(remove);
let removedcount1 = removed.unshift(remove1);
console.log('String with the selected mutants names ', removed.join());

//Define a mutants array and assign the following values
//Iterate over each mutants item using forEach
//The objective is to create a string value with Iceman, Logan and Phoenix
//To create the string you need to get the names while iterating the mutants array
//Once the iteration is over show the generated string with the selected mutants names