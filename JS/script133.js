let mutants = ['Professor X', 'Cyclop', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];
console.log(mutants);
console.log(mutants[4]);
let remove = mutants.splice(4,1);
console.log('removed', remove);
for(i = 0; i < mutants.length; i++) {
    mutants[i]= (i+1)+ '.' + mutants[i];
 }
 console.log(mutants.join('\n').toUpperCase());

//Define a mutants array with the following values:
//Professor X
//Cyclops
//Iceman
//Angel
//Magneto
//Beast
//Phoenix
//Logan
//Gambit
//First part
//Iterate over the mutants items
//Show each mutant name
//Break the execution in case Magneto is part of the mutants list
//Second part
//Fin out Magneto position and remove it from the mutants array
//Iterate over the array without Magento on it and show each mutant name in upper case and the item position