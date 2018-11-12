/* eslint no-var: "off" */
/* eslint no-unused-vars: "off" */
/* eslint max-len: "off" */

/**
 * Функция вывода строк для работы в fizzBuzz
 * @param {*} a 
 */
function log(a) {
    console.log(a);
}

/* Раместите ваш код ниже */

/**
 * реализовать фукнцию `fizzBuzz` 
 * которая выводит числа от 1 до 100. 
 * Если число кратно 3 - вместо числа вывести `Fizz`. 
 * Если кратно 5 - вывести вместо числа `Buzz`. 
 * Если число кратно и 3 и 5 - вывести вместо числа `FizzBuzz`. 
 * Для вывода использовать фукнцию `log` (аналогично заданию в классе). 
 * В теле функции нельзя использовать  `if`, `switch`, тернарный оператор `? :`
 */
function fizzBuzz() {
 for (var i = 1; i < 101; i++) {
 	
 	(i%3==0&&i%5==0)&&log("FizzBuzz");
 	(i%3==0&&i%5!=0)&&log("Fizz");
 	(i%5==0&&i%3!=0)&&log ("Buzz");
 	(i%3!=0&&i%5!=0)&&log(i);
 }
}


/**
 * реализовать фукнцию  `isPolindrom`, 
 * которая принимает на вход строку и возвращает результат проверки (`true`/ `false` ),
 * является строка полндромом (одинакого читается с лева на право и с права на лево ) или нет
 * @param {string} textString 
 * @return {boolean} Является строка полндромом (одинакого читается с лева на право и с права на лево ) или нет
 */
function isPolindrom(textString) {
 var reverseString = textString.split("").reverse().join("");
 return textString===reverseString;
}


/**
 * Реализовать фукнцию `drawCalendar` , 
 * которая принимает три аргумента - год, месяц, htmlElement 
 * и выводит в этот элемент календарь на месяц (дни недели начинаются с понедельника ).  
 * @param {number} year 
 * @param {number} month - номер месяца, начиная с 1
 * @param {external:HTMLElement} htmlEl 
 */
function drawCalendar(year, month, htmlEl) {
	month = month-1;
	var calendar = [['вс'],['пн'],['вт'],['ср'],['чт'],['пт'],['сб']];
	var date = new Date(year, month);
	var lastDayOfMonth = new Date(year,month+1,0).getDate();
	date.setDate(1);
	var firstDay = date.getDay();
	for (var i =1; i<firstDay; i++) {
		calendar[i][1]="";
	}
	for (var i = 1; i <lastDayOfMonth+1; i++) {
		date.setDate(i);
		calendar[date.getDay()].push(date.getDate());
	}
	var sanday = calendar.shift();
	calendar.push(sanday);
	  console.log(calendar);
    htmlEl.innerHTML=calendar;
    /* Ваше решение */
}


/**
 * Написать функцию `isDeepEqual`
 * которая принимает на вход двe переменных
 * и проверяет идентичны ли они по содержимому. Например
 * @param {*} objA 
 * @param {*} objB 
 * @return {boolean} идентичны ли параметры по содержимому
 */
function isDeepEqual(objA, objB) {
	if(objA===objB) return true;
	if(typeof(objA)!="object"||typeof(objB)!="object") return false;

	
	if(Object.keys(objA).length!=Object.keys(objB).length) return false;
 
 for(var key in objA){
 	
 	if(!(key in objB)) return false;
 	if(!isDeepEqual(objA[key], objB[key])) return false;
 	

 }
 return true;
}

/**
 * ф-ция `quadraticEquation`
 * которая принимает на вход коэффициенты квадратного уравнения
 * и возврщает массив состоящий из его корней, если таковые имеются. Например
 * @param{number, string}  a 
 * @param{number, string}  b
 *@param{number, string}  c
 * @return {Array} 
 *@return false если введне не правильный тип параметров
 */
function quadraticEquation(a, b, c) {
	var aType = typeof(a);
	var bType = typeof(b);
	var cType = typeof(c);
	if(aType!='number'&&aType!='string'||bType!='number'&&cType!='string'||cType!='number'&&cType!='string') return false;

	a = Number(a);
	b = Number(b);
	c = Number(c);
	//console.log(a, b, c);
	if(a!=a||b!=b||c!=c) return false;

	if(a==0) return [-c/b];
	else {
		var decr = b*b-4*a*c;
		if(decr<0) return [];
		else if(decr==0) return[-b/(2*a)];
		else {
			var sqrtDecr = Math.sqrt(decr);
			return [(-b+sqrtDecr)/(2*a), (-b-sqrtDecr)/(2*a)];
		}

	}
 return true;
}

/**
 * ф-ция `spiral`
 * которая принимает на вход двумерный массив
 * и возврщает двумерный массив с элементами расположенными по спирали.
 * @param{Array[][]}  a 
 * @return {Array[]} 
 *@return false если введне не правильный тип параметров
 */
function spiral(a) {
	if(!Array.isArray(a)) return false;
	var spiralArray = [];
	while(a.length!=0){
		spiralArray = spiralArray.concat(a.shift());
		if(a.length==0) break;
		for (var i = 0; i < a.length; i++) {
			spiralArray = spiralArray.concat(a[i].pop());	
		}
		if(a.length==0) break;
		spiralArray = spiralArray.concat(a.pop().reverse());
		if(a.length==0) break;
		for (var i = a.length-1; i >0 ; i--) {
			spiralArray = spiralArray.concat(a[i].shift());
		}
	}
 return spiralArray;
}




