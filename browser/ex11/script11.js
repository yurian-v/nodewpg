let firstName = window.prompt('Please input your first name');
let password = window.prompt('Please input your password');
window.alert(`Welcome ${firstName}`);
const greet = function() {
    window.confirm("Do you still want to be logged?");
  }
  setTimeout(greet, 10000);
  if (greet) {
  const question = function() {
      window.confirm(`${firstName} your session has been restored`);      
    }
    setTimeout(question, 11000);
} else {
    window.alert(`${firstName} your session has expaired`);
}
//if (question) {
           //window.alert();
        //} else {
           //window.alert(`${firstName} your session has expaired`);
  //clearTimeout(question);
//}
  //const greet = function(name, nickname) {
    //console.log(`Hi ${name} ${nickname}`);
  //}
  
  //setTimeout(greet, 5000, 'Marta', 'Martita');

  //const greet = function() {
    //console.log('Hi!!');
  //}
  
  //setTimeout(greet, 5000);
//Create a basic HTML document
//Create a script tag on the document head element
//Ask the user to input his username
//Ask the user to input his password
//Show the following alert message
//Welcome %username%
//After 10 seconds and for one time only show the following message to the user
//Do you still want to be logged?
//If the user confirms that he wants to be logged show the following message:
//%username% 
//Else show the following message
//%username% your session has expaired