const player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function (damage) {
        if (player.energy > 0) {
            player.energy = player.energy - damage;
            if (player.energy <=0) {
                player.loseLife();
                player.energy = 100;
            }
            //console.log("player energy level is " + player.energy);
        } else {
            player.loseLife();
        }
    },
    recoverEnergy: function (energyUp) {
        if (player.energy <= 100) {
            player.energy = player.energy + energyUp;
            //console.log("player energy level is " + this.energy);
        } else {
            player.energy = 100;
        }
    },
    loseLife: function () {
        if (player.lives === 0 && player.lives <= 0) {
            return "Game is over, try again";
            //console.log("Game is over, try again");
        } else {
            player.lives = player.lives - 1;
        } 
    },
    recoverLife: function () {
        player.lives = player.lives + 1;
        if (player.lives > 99) {
            player.lives = 99;
            console.log(player.lives);
        }
    },
};
player.name = "Yuriy";
console.log("The " + player.name + " has " + player.energy + " energy and " + player.lives + " lives");
player.loseLife();
console.log("The " + player.name + " has " + player.energy + " energy and " + player.lives + " lives");
player.loseEnergy(10)
console.log("The " + player.name + " has " + player.energy + " energy and " + player.lives + " lives");
player.loseEnergy(5);
console.log("The " + player.name + " has " + player.energy + " energy and " + player.lives + " lives");
player.loseEnergy(15);
console.log("The " + player.name + " has " + player.energy + " energy and " + player.lives + " lives");
player.loseEnergy(20);
console.log("The " + player.name + " has " + player.energy + " energy and " + player.lives + " lives");
player.recoverEnergy(10);
console.log("The " + player.name + " has " + player.energy + " energy and " + player.lives + " lives");
player.loseEnergy(30);
console.log("The " + player.name + " has " + player.energy + " energy and " + player.lives + " lives");
player.loseEnergy(40);
console.log("The " + player.name + " has " + player.energy + " energy and " + player.lives + " lives");
player.loseLife();
//player.loseEnergy(99);
console.log("The " + player.name + " has " + player.energy + " energy and " + player.lives + " lives");
player.recoverLife();
console.log("The " + player.name + " has " + player.energy + " energy and " + player.lives + " lives");
player.recoverLife();
console.log("The " + player.name + " has " + player.energy + " energy and " + player.lives + " lives");


//Define a player variable and assign a literal object with the following properties and methods:
//property: name, value: null
//property: energy, value: 100
//property: lives, value: 3
//method: loseEnergy
//method: recoverEnergy
//method: loseLife
//method: recoverLife
//Methods
//The loseEnergy accepts a damage numeric parameter and reduces the player object energy property value
//The recoveryEnergy accepts a energyUp numeric parameter and restores the player object energy property value
//The loseLife doesn't accept parameters and just subtract one player life every time you call it
//The recoverLife doesn't accept parameters and just adds one player life every time you call it
//Rules
//The player energy can't be negative
//The player energy can't be more than 100
//The player lives can't be bigger thant 99
//If the player energy is equal or lees than 0 then the player will lose a life
//Play Time!!!
//Set the player name
//Player lose a life
//Player lose 10 energy value
//Player lose 5 energy value
//Player lose 15 energy value
//Player lose 20 energy value
//Player earn 10 energy value
//Player lose 30 energy value
//Player lose 40 energy value
//Player lose a life
//Player wins a life
//Player wins a life
//Simulate each game play using the players object methods
//Show the following output after doing all the object methods calls
//The %player name% has %energy% energy % and  %lifes% lifes