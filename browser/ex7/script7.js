let result = 0;
window.alert('This program adds all the numbers you input');
            do {
                let number = window.prompt('please input a number');
                confirm(number);
                if (typeof parseInt(number) === "number") {
                    result = result + parseInt(number);
                    alert(`The result so far is: ${result}`)
                } else {
                    alert("Are you sure that it is a number");
                }
            }
                    while (window.confirm(`The result is ${result} do you like to continue`)) 
                    

            //let number = window.prompt('Please input your favorite number');
//if (number % 2) {
    //alert("Your favorite number " + number + " is ODD");
//} else {
    //alert("Your favorite number " + number + " is EVEN")
//}