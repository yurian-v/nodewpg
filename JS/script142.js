const array = [11, 3, 7, 50, 25];
function isBig( index, array) {  //возвращает числа, которые больше или равны 10
    return (array, index >= 10); //если значение элемента больше или равно 10 - выражение вернет true
  }
     
  var filtered = array.filter(isBig);  //filtered[11, 50, 25]
  console.log(array);
  console.log(filtered);