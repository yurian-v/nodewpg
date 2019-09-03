window.onload = function() {
    const firstLink = document.querySelector('a');
    console.log(firstLink.hasAttribute('class'));
    if (firstLink.hasAttribute('class')) {
        firstLink.classList.add('class','blue');
        console.log(firstLink.classList);
    }
};
  //Select the first link element
//Add the blue class if the element has the class attribute
//If not, then add the red class