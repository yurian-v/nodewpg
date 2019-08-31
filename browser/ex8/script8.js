let result = 0;
let count = 0;
window.alert('This program adds all the numbers you input');
            do {
                let number = window.prompt('please input a number');
                confirm(number);
                if (typeof parseInt(number) === "number") {
                    result = result + parseInt(number);
                    alert(`The result so far is: ${result}`)
                    count = count + 1;
                } else {
                    alert("Are you sure that it is a number");
                }
            }
                    while (window.confirm(`The result is ${result} do you like to continue`))
                    let average = result / count;
                    window.alert(`The final result is:${result}
                    The user input ${count} numbers
                    The average is: ${average}`);
     
//Copy and paste the code from the previous exercise
//Refactor the code to math the new requirements:
//Now we need to keep track of how many numbers the user input
//Once the user doesn't want to add any more numbers show the following message:
//The final result is: %result%
//The user input %numbers% numbers
//The average is: %average%