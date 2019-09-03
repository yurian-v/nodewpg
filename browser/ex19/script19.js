
window.onload = function() {
    const h1 = document.querySelector('h1');
    const div = document.querySelector('div');
    if (h1.hasAttribute('class') && div.hasAttribute('class')) {
        h1.setAttribute('class','striked');
        div.setAttribute('class','striked');
        h1.classList.add('class','purple');
    } else {
        h1.setAttribute('class','bold');
        div.setAttribute('class','bold');
    }
    div.removeAttribute('name');
    console.log(div.attributes);
}
//Select the h1 and div element and assign them to a new variable
//If any of these elements has attributes then add the striked class to both of them
//Else add the bold class
//Remove the name attribute from the div element (use the web console elements tab to see the result)