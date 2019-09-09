window.onload = function () {
    const bodyElement = document.querySelector('body');
    console.log(bodyElement);
    let numbers = [];
    for (let x = 0; x <= 99; x++) {
        numbers[x]= x + 1;
    };
    console.log(numbers);
    const ulElement = document.createElement('ul');
    numbers.forEach(function(number) {
        const liElement = document.createElement('li');
        liElement.innerText = "Item " + number + " as li element content";
        if (number % 2 === 0) {
            liElement.style.color = "blue";
        } else {
            liElement.style.color = "grey";
        }
        ulElement.appendChild(liElement) 
    });
    bodyElement.appendChild(ulElement);
};
//Select the body element
//Define a numbers array with numbers between 1 and 100
//Create a ul element
//Iterate the numbers array and execute the following task for each item:
//Create a li element
//Set the following text: Item %number% as li element content
//Add color: #ddd as li element style property if it's even number
//Else add color: #eee as li element style property
//Insert each list item into the ul element
//Insert the ul element into the body element