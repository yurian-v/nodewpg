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
const keyHandler = function(event) {
    const div = document.querySelector('div');
    const charCode = event.charCode;
    const pressedKey = String.fromCharCode(charCode);
    div.innerText += pressedKey +'\n';
    //console.log(`You pressed the ${pressedKey} key with the ${charCode} code`)
}
window.onload = function() {
    const firstButton = document.querySelector('#firstButton');
    const secondButton = document.getElementById('secondButton');
    let link = document.querySelector('a');
    firstButton.addEventListener('click', clickHandler);
    secondButton.onclick = secondButton.addEventListener('click',greet);
    link.onclick = link.addEventListener('click',linkHandler);
};