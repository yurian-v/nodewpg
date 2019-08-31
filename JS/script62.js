let monthnumber = 2;
let monthname = null;
let monthdays = null;
let monthdays30 = 30;
let monthdays31 = 31;
let monthdaysfebr = "28 days in a common year and 29 days in leap years";
switch (monthnumber) {
    case 1:
        console.log(monthname = "January -", monthdays31, "days");
        break;
    case 2:
        console.log(monthname = "February -", monthdaysfebr);
        break;
    case 3:
        console.log(monthname = "March -", monthdays31, "days");
        break;
    case 4:
        console.log(monthname = "April -", monthdays30, "days");
        break;
    case 5:
        console.log(monthname = "May -", monthdays31, "days");
        break;
    case 6:
        console.log(monthname = "June -", monthdays30, "days");
        break;
    case 7:
        console.log(monthname = "July -", monthdays31, "days");
        break;
    case 8:
        console.log(monthname = "August -", monthdays31, "days");
        break;
    case 9:
        console.log(monthname = "September -", monthdays30, "days");
        break;
    case 10:
        console.log(monthname = "October -", monthdays31, "days");
        break;
    case 11:
        console.log(monthname = "November -", monthdays30, "days");
        break;
    case 12:
        console.log(monthname = "December -", monthdays31, "days");
        break;
    default:
        console.log('Error');
}


//Define monthNumber variable and assign a number between 1 and 12
//Define monthName variable and assign null as value
//define monthDays variable and assign null as value
//Use a switch statement
//Depending the monthNumber value assign the corresponding monthName and monthDays values