const clickHandler = function() {
    alert('You clicked an event listened element')
}
const greet = function() {
    alert('we are deleting event listener');
    secondButton.removeEventListener('click',clickHandler);
}
const linkHandler = function(event) {
    event.preventDefault();
    alert('This link does not send us to a differen page as we are preventing the default behaviour');
}
const htmlHandler = function(event) {
    console.log(event.clientX);
    console.log(event.clientY);
}
window.onload = function() {
    const html = document.querySelector('html');
    const firstButton = document.querySelector('#firstButton');
    const secondButton = document.getElementById('secondButton');
    let link = document.querySelector('a');
    firstButton.addEventListener('click', clickHandler);
    secondButton.onclick = secondButton.addEventListener('click',greet);
    link.onclick = link.addEventListener('click',linkHandler);
    html.addEventListener('click',htmlHandler);
};
//Create a script tag on the document head element
//Copy and paste the all the code (html and js) from exercise 35
//Select the html element using querySelector method
//Add a click event handler to the html element using addEventListener
//When the user clicks on any position we need to show the folloing console message
 //Click possition: x-axis: %xposition%, y-axis: %yposition%
//Use the event x and y properties to get the coordinates and show the message