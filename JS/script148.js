const superHero = {
    name: 'Batman',
    secretName: "Bruce",
    sidekick: ['Robin', 'Alfred', 'Gordon'],
    strenghth: 70
};
console.log("Super Hero name: " + superHero.name);
console.log("Super Hero Secret name: " + superHero.secretName);
console.log("Super Hero side kick: " + superHero.sidekick);
console.log("Super Hero strenghth: " + superHero.strenghth);
console.log("Super Hero speed: " + superHero.speed);
superHero.speed = 120;
console.log("Super Hero speed: " + superHero.speed);


//Define a superhero variable and assign a literal object
//Create the following properties and values to the superhero object:
//property: name, value: Batman
//property: secretName, value: Bruce
//property: sidekick, value: ['Robin', 'Alfred', 'Gordon']
//property: strength, value: 70
//Show each superhero property as output
//Show the superhero speed property
//Now add the speed property to the superhero object using dynamic property and assign the value 80
//Show the superhero speed property again