window.onload = function() {
    const ul = document.querySelector('ul');
    console.log(ul);
    const children = ul.children;
    const secondChild = children[1];
    secondChild.setAttribute('class','green');
    const foursChild = children[3];
    foursChild.setAttribute('class','red');
    const parent = foursChild.parentElement;
    parent.setAttribute('class','orange');
}

    //const div = document.querySelector('div');
//const children = div.children;
//const firstChildElement = children[0];
//Select the ul element
//Show the ul children elements as output
//Select the 2nd child element, assign it to a variable and assign the green class to it
//Select the 4th child element, assign it to a variable and assign the red class to it
//Use the selected child elements to show the parent one as output
//Using one of the child elements get a reference to the parent and add the orange class to it