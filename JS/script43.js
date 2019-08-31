let text = "game of thrones";
let firstchar = text.charAt(0);
let secondchar = text.charAt(5);
let thirdchar = text.charAt(8);
let result1 = firstchar.concat(secondchar);
let result2 = result1.concat(thirdchar);
console.log("The final result is:", result2.toUpperCase());

//$ node script1000.js
//internal/modules/cjs/loader.js:638
    //throw err;
   // ^
//
//Error: Cannot find module 'C:\Users\YURIY\nodewpg\JS\script1000.js'
    //at Function.Module._resolveFilename (internal/modules/cjs/loader.js:636:15)
    //at Function.Module._load (internal/modules/cjs/loader.js:562:25)
    //at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
    //at startup (internal/bootstrap/node.js:283:19)
    //at bootstrapNodeJSCore (internal/bootstrap/node.js:622:3)
