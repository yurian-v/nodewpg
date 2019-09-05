window.onload = function () {
    const bodyElement = document.querySelector('body');
    console.log(bodyElement);
    const ulElement = document.createElement('ul');
    const names = ['Yuriy', 'Nata', 'El', 'Arsenii', 'Vlad', 'Slava', 'Maria', 'Diana', 'Alex', 'Serge'];
    names.forEach((name) => {
        const listNames = document.createElement('li');
        listNames.innerHTML = name;
        listNames.style.color = 'orange';
        ulElement.appendChild(listNames);
        document.body.appendChild(ulElement);
    })
};
//Select the body element
//Create a name array and add 10 names as items
//Create a ul element
//Iterate the name array and execute the following task for each item:
//Create an li element
//Set the name value as li element content
//Insert the li element into the ul element
