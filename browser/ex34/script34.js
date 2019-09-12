const clickHandler = function() {
    alert('You clicked an event listened element')
}
const greet = function() {
    alert('we are using it as an event listener');
    secondButton.removeEventListener('click',clickHandler);
}
window.onload = function() {
    const firstButton = document.querySelector('#firstButton');
    const secondButton = document.getElementById('secondButton');
    firstButton.addEventListener('click', clickHandler);
    secondButton.onclick = secondButton.addEventListener('click',greet);
    //secondButton.onclick = secondButton.removeEventListener('click',clickHandler);
}
//Add the secondButton id element as shown in the html example
//Select the secondButton id element using the getElementById method
//Create a greeting function that will show the alert message that we're using as firstButton event listener
//Use the greeting function as addEventListener callback
//Add a new event handler to the secondButton element using onclick
//Clicking the second button must remove the click listener from the first one