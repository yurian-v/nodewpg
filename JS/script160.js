const propertiesNames = ["name", "price", "sold", "console"];
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
    //gamesNames: function (name) {
        //console.log(game.name);
    //},
    //sallingPrice: function(price) {
        //console.log(game.price);
    //},
    //gamesSold: function(sold) {
        //console.log(game.sold);
    //},
    //playingConsole: function (console) {
        //console.log(game.console);
    //},
};

const properties = Object.keys(propertiesNames);
  properties.forEach(function(property) {
      console.log(propertiesNames);
  });
//gamesNames: function () {
    //console.log(game.name);
//};
//sallingPrice: function() {
    //console.log(game.price);
//};
//gamesSold: function() {
    //console.log(game.sold);
//};
//playingConsole: function () {
    //console.log(game.console);
//};

console.log(game['name']);
console.log(game['price']);
console.log(game['sold']);
console.log(game['console']);
//console.log(`The ${jeep['brand']} is ${jeep['price']}`);
//console.log("*********Object dynamic properties***********")

//Define a propertiesNames array and assign the following string values: name, price, sold & console
//Copy and paste the games array from exercise 155
//Iterate over the games array
//Show each game properties value using the properties names defined in the propertiesNames array
//Use the propertiesNames as dynamic properties accesor for the games array