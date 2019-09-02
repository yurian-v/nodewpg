//let n = 20;
//for (let i = 0;i <=n;i++) {
    //let c = 1;
    //let s = '';
    //while (c <= i) {
      // s =  s + '*';
        //c++;
    //}
    //console.log(s); 
//}
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

var filterArr = numbers.filter(function(elem) {
	if (elem >= 0) {
		return true;
	} else {
		return false;
	}
});

console.log(filterArr);

// инициализируем переменную, содержащую массив числовых значений 
var numbers = [50, 4, 33, 88, 1, 11, 123]; 

// сортируем массив числовых значений в порядке возрастания
numbers.sort(( a, b ) =>  a - b);                      // [1, 4, 11, 33, 50, 88, 123]

// аналогично без использования стрелочной функции
numbers.sort(function( a, b ) {return a - b});         // [1, 4, 11, 33, 50, 88, 123]

// сортируем массив числовых значений в порядке убывания
numbers.sort(( a, b ) =>  b - a);                      // [123, 88, 50, 33, 11, 4, 1]

// аналогично без использования стрелочной функции
numbers.sort(function( a, b ) {return b - a});         // [123, 88, 50, 33, 11, 4, 1]

// инициализируем переменную, содержащую массив объектов 
var items = [
  {name: "Миша", age: 23},
  {name: "Вася", age: 44},
  {name: "Саша", age: 2},
  {name: "Рома", age: 99},
  {name: "Ашот", age: 19}
];

// сортируем объекты внутри массива по свойству name (по алфавиту) 
items.sort(( a, b ) => a.name > b.name)
console.log( items ); // выводим в консоль результат сортировки 
[
  {name: "Ашот", age: 19},
  {name: "Вася", age: 44},
  {name: "Миша", age: 23},
  {name: "Рома", age: 99},
  {name: "Саша", age: 20},
]

// сортируем объекты внутри массива по свойству age (по возрастанию числовых значений) 
items.sort(( a, b ) => a.age - b.age);
console.log( items ); // выводим в консоль результат сортировки
[
  {name: "Саша", age: 2},
  {name: "Ашот", age: 19},
  {name: "Миша", age: 23},
  {name: "Вася", age: 44},
  {name: "Рома", age: 99}]

  <p id="rocket"></p>
        <script>
        timedInfo(); // вызов функции, обязателен, иначе не сработает
        function timedInfo() {
            setTimeout(one, 1000)
              setTimeout(two, 3000)
              setTimeout(three, 5000)
          }
        function one() {
            document.getElementById("rocket").innerHTML = "Установить связь с центром!";
        }
        function two() {
            document.getElementById("rocket").innerHTML = "Пристегнуть ремни!";
        }
        function three() {
            document.getElementById("rocket").innerHTML = "Контрольная проверка связи!";
        }
        </script> 