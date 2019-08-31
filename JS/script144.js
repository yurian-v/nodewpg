const user = {
    username : 'batman',
    password : 'Alfred1960ROCKS!'
};
console.log(user.username);
console.log(user.password);
user.username = user.username.toUpperCase();
user.password = user.password.substr(0,6).concat(" " + user.password.substr(10,18));
console.log(user.username);
console.log(user.password);
//const person = {
    //name: 'Nico',
    //age: 38
  //}
  //console.log(person.name);
  //console.log(person.age);
  //console.log(person);
//Define a user variable and assign a literal object as value
//Add the following properties and values to the user object:
//property: username, value: batman
//property: password, value: Alfred1960ROCKS!
//First Output:
//Show the users username and password as output using the user properties
//Second Output:
//Now show the users username and password as output again but with the following format:
//username: must be capitalized: example: Batman
//password: replace 1960 for an empty space so it looks this way: Alfred ROCKS!
//In both cases use the user object properties to get the final output