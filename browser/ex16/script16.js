window.onload = function() {
    const firstLink = document.querySelector('a');
    console.log('firstLink.attributes: ',firstLink.attributes);
    console.log('href value: ',firstLink.attributes[0].value);
    console.log('attributes value: ',firstLink.attributes[1].value);
}
    
//Select the first link element
//Show the href and class attributes values
//Use any of the ways that you know