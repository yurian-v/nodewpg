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
for (let x = 0; x <= 12; x++) {
    console.log("name: " + game[x].name);
    console.log("price: " + game[x].price);
    console.log("sold: " + game[x].sold);
    console.log("console: " + game[x].console);
    console.log("                            ");
};
    //onsole.log("name: " + game[x].name);
    //console.log("price: " + game[x].price);
//We'll create a games collection and list there names as output
//The games have the following properties and methods
//property: name (string)
//property: price (number)
//property: sold (number)
//property: console (string)
//Define a games variable and assign a literal array value
//Define the following games literal objects and assign them as items to the game array