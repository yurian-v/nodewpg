//let x = 0;
//let y = 0;
//while (x < 1001) {
//y = y + x ;
//console.log("partial res", y);
//x++;
//}

let x = 0;
let y = 0;
do {
    console.log("partial res " + y);
    y = y + x;
    x++;
}
while (x < 1001);