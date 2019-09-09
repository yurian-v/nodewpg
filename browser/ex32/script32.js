window.onload = function() {
    const firstbutton = document.getElementById('firstbutton');
    const handleClickevent = function() {
        alert ("I said it before !!! Oh.. Don't Click Me!!!");
    };
    firstbutton.onclick = handleClickevent;
};
//Selec the element with firstbutton id using getElementById
//When the user clicks the button will see an alert message with the following message:
//Oh.. Don't Click Me!!
//Use the onclick element property
//Try assigning the function to a variable and then assign the variable to the onclick handler