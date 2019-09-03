window.onload = function() {
    const ul = document.querySelector('ul');
    const children = ul.children;
    const firstChild = children[0];
    firstChild.setAttribute('class','orange');
    const thirdChild = children[2];
    thirdChild.setAttribute('class','orange');
    thirdChild.nextElementSibling.setAttribute('class','orange');
    thirdChild.previousElementSibling.setAttribute('class','orange');
    const lastChild = children[4];
    lastChild.setAttribute('class','orange');
    thirdChild.setAttribute('class','red');
    firstChild.setAttribute('class','green');


    //const foursChild = children[3];
    //foursChild.setAttribute('class','red');
    //const parent = foursChild.parentElement;
    //parent.setAttribute('class','orange');
}
//Select the first list item element and add the orange class
//Using the selected element select the following element using nextElementSibling and add the orange class
//Keep doing this until there's no more siblings
//At the end all elements must have the orange class
//Once you acomplish this task:
//Now we need to go back using previousElementSibling
//Add red class to Item 3
//Add green class to Item 1
//Final result on the browser must be: