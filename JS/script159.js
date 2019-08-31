const brand = 'brand';
const price = 'price';

const jeep = {
    brand: "Jeep Wrangler",
    price: 34000,
    brandNames: function() {
        console.log(jeep.brand);
    },
    sallingPrice: function() {
        this.price++;
    } 
};
console.log(jeep['brand']);
console.log(jeep['price']);
console.log(`The ${jeep['brand']} is ${jeep['price']}`);
console.log("*********Object dynamic properties***********")
console.log(`the ${jeep[brand]} is ${jeep[price]}`);
console.log("**************using variables****************")

//Create a new index159.js
//Define a jeep variable and assign a literal object
//Add the object a brand property and assign the following string value: Jeep Wrangler
//Add the object a price property and assign the following numeric value: 34000
//Show the following message as output using object dynamic properties (use variables or string literals)
//The %brand% is $ %price%
