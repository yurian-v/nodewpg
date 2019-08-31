let mutants = ['Professor', 'Cyclop', 'Iceman', 'Angel', 'Beast', 'Phoenix', 'Logan'];

mutants.indexOf('Logan', 'Professor'); // 2

if (mutants.indexOf('Logan', 'Professor') > -1) {
  console.log('We love X-Men ');
} else {
  console.log('X-Men sucks');
}
//Show the following message only if Logan and Professor X are mutants items:
//We love X-Men
//Show the following message only if Gambit is not a mutants items:
//X-Men sucks
//const pets = ['Amelia', 'Ciro', 'Ulises', 'Carlos'];

//pets.forEach(function(petName) {
  //console.log(petName);
//});