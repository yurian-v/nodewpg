function add() {
    let res = 0;
    for (let x = 0; x <= arguments.length -1; x++) {
        res = res + arguments[x];
    };
    return res;
};
console.log(add(1,3,5,7,9));
console.log(add(6,4,55,66,99,34,12,52,71,44));


//var sum = function () {
    //var sum = 0;
    //for (var i = 0; i < arguments.length; i++) {
        //sum += arguments[i];
    //}
    //return sum;
//}

//alert( sum(2, 4, 8, 16) ); 
//Define a add function
//This function will return a numeric value with result of adding all the numbers that we pass as parameter
//As we don't know how many parameters we are going to get we need to use a dynamic way to add this functionality
//Call the add function passing 5 numbers and show the result as output
//Call the add function passing 10 numbers and show the result as output