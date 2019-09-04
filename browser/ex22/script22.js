window.onload = function () {
    const h1 = document.querySelector('h1');
    const h1Content = h1.innerText
    //h1.innerText = 'This is a paragraph';
    console.log(h1Content);
    //
    const p = document.querySelector('p');
    const pContent = p.textContent;
    console.log(pContent);

    h1.innerText = pContent;
    p.textContent = h1Content;
    
    console.log(h1);
    console.log(p);
    //p.innerHTML();
    //const h1 = document.querySelector('h1');
    //h1.innerText = 'This is a paragraph';
    //console.log(h1.innerText);
    //const p = document.querySelector('p');
    //p.textContent = 'Main Title';
    //console.log(p.textContent);
    

}


//Select the h1 element
//Define a new variable and store the h1 element content using innerText
//Select the p element
//Define a new variable and store the p element content using textContent
//Replace the h1 element content for the paragraph one
//Replace the p element content for the title one
//Once this code gets executed we get the following result:

//<h1>This is a paragraph</h1>
 // <p>Main Title</p>