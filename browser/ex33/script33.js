
const clickHandler = function() {
    alert('You clicked an event listened element')
}

window.onload = function() {
    const firstButton = document.querySelector('#firstButton');
    firstButton.addEventListener('click', clickHandler);
}
//Select the firstButton id element using querySelector method
//When the user clicks this button will see an alert message with the following message:
//You clicked an event listened element
//Use addEventListener to add this functionality
//Add other event listener to this button reading the doc and using your imagination!