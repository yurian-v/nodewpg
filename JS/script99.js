//for (let number = 0; number < 1001; number++){
    //if (number < 41) {     
        //if ((number % 2) === 0) {
            //console.log("partial relult " + number);
        //}
    //} else {
        //break;
    //}
 //}
let y = 0;
let res = 0;
 for (let number = 0; number < 1001; number++){
    if (y < 20) {     
        if ((number % 2) === 0) {
            y = y + 1;
            res = res + 2;
            console.log("partial relult " + res);
        }
    } else {
        break;
    }
 }

 

//Add all even numbers bettwen 0 and 1000 using for statement
//The iteration must break after finding the first 20 even numbers
//Show the result as output