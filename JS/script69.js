let x = 0;
let y = 0;
while (x < 1001) {
y = y + x ;
console.log("partial res", y);
x++;
}
//Create a new index69.js file
//Use while structure to sum numbers between 0 and 1000
//Show the partial result as output too

let res = 0;
let index = 0;

while(index <1001) {
    console.log('partial res', +res);
    res = res + index;
    index ++;
}