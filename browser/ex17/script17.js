window.onload = function() {
    let selectColor ="";
      do {
        selectColor = window.prompt("Please select a color: green, blue or red");
      } while ( selectColor !== "blue" && selectColor !== "green" && selectColor !== "red");
      
      const firstLink = document.querySelector('a');
      firstLink.classList.add(selectColor);
      console.log(firstLink.classList);
  }

//Ask the user to select a color showing the following message:
//Please choose & input one of the following colors: green, blue or red
//Select the first link element
//Add the user selected color as class name to the selected element (first link)
//Avoid adding the class if the user inputs a color that's not an option
//So if the user selects blue as color we need to add the blue class to the first link