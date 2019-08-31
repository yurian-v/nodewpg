const text1 = "HELLO ";
const text1tolower = text1.toLowerCase();
const text2 = "javascript ";
const text2toupper = text2.toUpperCase();
const text3 = "WORLD"
const text3tolower = text3.toLowerCase();
const message = text1tolower.concat(text2toupper);
const message2 = message.concat(text3tolower);
console.log(message2);
console.log(text1tolower + text2toupper + text3tolower);