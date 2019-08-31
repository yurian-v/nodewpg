const mutants = ['Professor X', 'Cyclop', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

  function sorting(index, mutant) {
    if ((mutant, index !== 'Magneto') && (mutant, index !== 'Iceman') && (mutant, index !== 'Gambit')) {
       return (mutant, index);
    } else {
       return false;
    }
 }

  const filtered = mutants.filter(sorting);
  console.log('Selected mutants are: ' + filtered.join(", "));
//Define a mutants array with the following values:

//Filter the list using the filter method and remove the following mutants:
//Magneto
//Iceman
//Gambit
//Show the filtered list as output