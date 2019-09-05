window.onload = function () {
    const bodyElement = document.querySelector('body');
    console.log(bodyElement);
    const h1Element = document.createElement('h1');
    h1Element.innerText = "Create Dynamic content!!!";
    h1Element.style.color = 'blue';
    const pElement = document.createElement('p');
    pElement.innerText = "This elements were created using JavaScript";
    pElement.style.color = 'red';
    document.body.appendChild(h1Element);
    document.body.appendChild(pElement);
};
//Select the body element
//Create a h1 element
//Add the h1 element the following content:
//Create Dynamic content!!!
//Create a paragraph element
//Add the p element the following content:
//This elements were created using JavaScript
//Inster the h1 element into the body element
//Inster the paragraph element into the body element