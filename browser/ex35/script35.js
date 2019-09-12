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
window.onload = function() {
    const firstButton = document.querySelector('#firstButton');
    const secondButton = document.getElementById('secondButton');
    let link = document.querySelector('a');
    firstButton.addEventListener('click', clickHandler);
    secondButton.onclick = secondButton.addEventListener('click',greet);
    link.onclick = link.addEventListener('click',linkHandler);
};
//Add a link element like the one in html example
//Select the link element using querySelector method
//Add the link element an click event handler using addEventListener
//When the user clicks on the link we need to prevent the default behaviour
//Show the following message using alert
//This link doesn't send us to a differen page as we're preventing the default behaviour