let year = 2018;
let champion = null;

switch (year) {
    case 2006:
        champion = "Carolina Hurricanes was the " + year + " NHL Champion";
      break;
      case 2007:
        champion = "Anaheim Ducks was the " + year + " NHL Champion";
      break;
      case 2008:
        champion = "Detroit Red Wings was the " + year + " NHL Champion";
      break;
      case 2009:
        champion = "Pittsburgh Penguinas was the " + year + " NHL Champion";
      break;
      case 2010:
        champion = "Chicago Blackhawks was the " + year + " NHL Champion";
      break;
      case 2011:
        champion = "Boston Bruins was the " + year + " NHL Champion";
      break;
      case 2012:
        champion = "Los Angeles Kings was the " + year + " NHL Champion";
      break;
      case 2013:
        champion = "Chicago Blackhawks was the " + year + " NHL Champion";
      break;
      case 2014:
        champion = "Los Angeles Kings was the " + year + " NHL Champion";
      break;
      case 2015:
        champion = "Chicago Blackhawks was the " + year + " NHL Champion";
      break;
      case 2016:
        champion = "Pittsburgh Penguins was the " + year + " NHL Champion";
      break;
      case 2017:
        champion = "Pittsburgh Penguins was the " + year + " NHL Champion";
      break;
    default:
        champion = 'Sorry, please try a differnt year';
  }
  
  console.log(champion);

//Define year variable and assign a number between 2006 and 2017
//Define champion variable and assing a value between 2006 and 2017
//Show the following ouptup depending the selected year: %champion% was the %year% NHL Champion
//If the value it's not bettwen 2006 and 2017 show the following error: Sorry, please try a differnt year
//Use a switch statement to check for the selected year value `` 
//* Try all the posible cases/scenarios (even the error message) by changing the year value