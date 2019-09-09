window.onload = function() {
    const ulElements = document.querySelector('ul');
    let liFirst =ulElements.children.item(0);
    let liSecond =ulElements.children.item(1);
    let liThird =ulElements.children.item(2);
    let liFours =ulElements.children.item(3);
    let liFifth =ulElements.children.item(4);
    let liSixth =ulElements.children.item(5);
    let liSeventh =ulElements.children.item(6);
    ulElements.removeChild(liFirst);
    ulElements.removeChild(liSecond);
    ulElements.removeChild(liThird);
    ulElements.removeChild(liFours);
    ulElements.removeChild(liFifth);
    ulElements.removeChild(liSixth);
    ulElements.removeChild(liSeventh);
};
    //const liElements = document.querySelector('li');
    //const bodyElement = document.querySelector('body');
    //console.log(bodyElement);
    //const names = ['Yuriy', 'Nata', 'El', 'Arsenii', 'Vlad', 'Slava', 'Maria', 'Diana', 'Alex', 'Serge'];
    //liElements.forEach((liElement) => {
        //if (liElement === "") {
            //li.removechild(liElements);
        //};
    //});
    //ulElement.removeChild(liElements)

//Select the ul element
//Select each list item and assign it to a variable (use children property)
//Remove each list item from the ul element using removeChild