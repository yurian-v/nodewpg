const consolePreference = 'PS4';
const game = [];

game[0] = {
    name: 'Crash Bandicoot N. Sane Trilogy',
    price: 1060,
    sold: 20,
    console: 'PS4',
};
game[1] = {
    name: 'Lego Marvel Super Heroes',
    price: 700,
    sold: 25,
    console: 'XBOX',
};
game[2] = {
    name: 'Gta V',
    price: 1449,
    sold: 30,
    console: 'PS4',
};
game[3] = {
    name: 'Mortal Kombat Xl',
    price: 1190,
    sold: 34,
    console: 'PS4',
};
game[4] = {
    name: 'Gta V',
    price: 1250,
    sold: 60,
    console: 'XBOX',
};
game[5]= {
    name: 'Fifa 2017',
    price: 890,
    sold: 15,
    console: 'PS4',
};
game[6] = {
    name: 'Uncharted 4',
    price: 950,
    sold: 30,
    console: 'PS4',
};
game[7] = {
    name: 'Mortal Kombat Xl',
    price: 940,
    sold: 30,
    console: 'XBOX',
};
game[8] = {
    name: 'Need For Speed',
    price: 790,
    sold: 10,
    console: 'PS4',
};
game[9] = {
    name: 'Lego Batman',
    price: 1000,
    sold: 18,
    console: 'PS4',
};
game[10] = {
    name: 'Fifa 17',
    price: 1290,
    sold: 12,
    console: 'PS4',
};
game[11] = {
    name: 'Resident Evil 7',
    price: 1390,
    sold: 10,
    console: 'PS4',
};
game[12] = {
    name: 'Dragon Ball XX',
    price: 1390,
    sold: 25,
    console: 'XBOX',
};
//for (let x = 0; x <= 12; x++) {
    //game.forEach(function(game) {
    //console.log("name: " + game.name);
    //console.log("price: " + game.price);
    //console.log("sold: " + game.sold);
    //console.log("console: " + game.console);
    //console.log("                   ");
//});

let filteredGames = game.filter(function(game) {
	if (game.console === consolePreference) {
		return true;
	} else {
		return false;
	}
});

console.log(filteredGames);

let gameNames = [];
let gamePrices = [];
for (let x = 0; x <= filteredGames.length-1; x++) {
    gameNames = game[x].name ;
    console.log(`The games names are: ${gameNames}`);
};
for (let x = 0; x <= filteredGames.length-1; x++) {
    gamePrices = filteredGames[x].price ;
    console.log(`The games prices are: ${gamePrices}`);
};
let budgetGames = 0;
for (let x = 0; x <= filteredGames.length-1; x++) {
    budgetGames = budgetGames + filteredGames[x].price ;
};
console.log(`I need ${budgetGames} CAD to get all this ${consolePreference} great games!!`);


//Copy and paste the code from the previous exercise ()
//Refactor the code to match new requirements
//Define a budget variable
//Add all PS4 games price and assign it to the budget variable
//Show the following message as output:
//I need %budget% CAD to get all this PS$ great games!!
//Define a new gameNames array and assign all the games names (all strings)
//Define a new gamePrices array and assign all the games prices (all numbers)
//Show the gameNames items as output
//Show the gamePrices items as output