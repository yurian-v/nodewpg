let i = 1; 
let msg = '';
//while (i < 10) {
  //msg+= i + ' times 9 equals ' + (i * 9) + "\n";  
  //i++;
//}
//console.log(msg);

do {
    msg+= i + ' times 9 equals ' + (i * 9) + "\n";  
    i++;
  } 
  while (i < 10);
  console.log(msg);