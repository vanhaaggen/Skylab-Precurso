//a) Puedes contar cuantas letras tiene tu nombre?
let myName = 'Christian'
console.log(myName.length) //9

//b) Añade tu apellido e indica en que posición del string empieza (prueba a buscar el espacio entre el nombre y el apellido):
let myName = 'Christian Haag'

let srcIndexLastName = myName.indexOf(" ") + 1;

console.log('Your last name starts at position ' + srcIndexLastName)//10
/////b) otra solución:
	let myName = 'Christian Haag';
	let lastName = 'Haag'

	let srcIndexLastName = myName.indexOf(lastName);

	console.log('Your last name starts at position ' + srcIndexLastName)//10

//c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre (lo que haya antes del espacio):
let myName = 'Christian Haag'

console.log('My name is ' + myName.slice(0, 9))//My name is Christian.
/////c) otra solución:
	let myName = 'Christian Haag'
	let nameArr = myName.split(" ");

	console.log('My name is ' + nameArr[0])//My name is Christian.

//d) Ahora, solo tu apellido.
let myName = 'Christian Haag';

console.log('My last name is ' + myName.slice(10))// My last name is Haag.
/////d) otra solucion:
	let myName = 'Christian Haag';
	let nameArr = myName.split(" ");

	console.log('My last name is ' + nameArr[1])//My last name is Haag.

//d1) Iguala el resultado a una variable nueva e imprímela por pantalla.
let myFirstString = 'Christian Haag';
let myNewString = myFirstString.split(" ");

console.log(myFirstString + ', ' + myNewString[1])

//e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.
let myName = 'Christian Haag';

console.log('Hello, ' + myName.replace('Christian', 'Mr.'))

//f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.
let myName = 'Christian Haag'

console.log('My lastname is ' + myName.slice(10).toUpperCase())

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.
let myName = 'Christian Haag';
let newVariable = myName + ' wants to be called Lord GraySkull';

console.log(newVariable)

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?
let myName = 'Christian Haag';
console.log(myName[0] + '.' + myName[myName.indexOf("Haag")]);

//SEGUNDA PARTE ----------------------------------------------------------------------

//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/".
let myName = ['Christian Haag'];
let newArr = []
for (let i = 0; i < myName.length; i++){
	for (let j = 0; j < myName[i].length; j++){
	newArr.push(myName[i][j]);
	}

}

let removeSpace = newArr.splice(9, 1);

console.log(newArr.join("/").toUpperCase());// C/H/R/I/S/T/I/A/N/H/A/A/G
//prueba de hacerlo con el forEach()


//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|".
let myName = ['Christian Haag'];
let newArr = []

for (let i = 0; i < myName.length; i++){
	for (let j = 0; j < myName[i].length; j++){
	newArr.push(myName[i][j]);
	}
}
let removeSpace = newArr.splice(0, 10);

console.log(newArr.join("|").toUpperCase()); // H|A|A|G


//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for).
let myName = ['Christian Haag'];
let newArr = [];

for (let i = 0; i < myName.length; i++){
	for (let j = 0; j < myName[i].length; j++){
	newArr.push(myName[i][j]);
	};
};

newArr.forEach(function(currentValue, index){
	newArr[index] = index + 'º ' + currentValue.toUpperCase(); 
});

let remove = newArr.splice(9, 5);

console.log(newArr)// 0º C", "1º H", "2º R", "3º I", "4º S", "5º T", "6º I", "7º A", "8º N"

//d)Como en el ejercicio anterior, pero seleccionando tu apellido.
let myName = ['Christian Haag'];
let newArr = [];

for (let i = 0; i < myName.length; i++){
	for (let j = 0; j < myName[i].length; j++){
	newArr.push(myName[i][j]);
	};
};

newArr.forEach(function(currentValue, index){
	newArr[index] = index + 'º ' + currentValue.toUpperCase(); 
	
});

let lastName = newArr.slice(10);

console.log(lastName)// 10º H", "11º A", "12º A", "13º G

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings.
let myName = ['Christian Haag'];
let newArr = [];

for (let i = 0; i < myName.length; i++){
	for (let j = 0; j < myName[i].length; j++){
	newArr.push(myName[i][j]);
	};
};

let myInitials  = newArr[0] + '.' + newArr[10]; 

console.log(myInitials);// C.H

//f) Ahora, reformula la array, introduciendo tu nombre en primera posición, 
//tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.
let myArr = ['Christian', 'Haag', 34];
let mySelector= 'My Name is ' + myArr[0] + ' and I\'m ' + myArr[2] + ' years old';

console.log(mySelector)// My Name is Christian and I'm 34 years old.

//g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios.
let myArr = ['Christian', 'Haag', 34];

let myCityAdd = city => {
   myArr.push(city);
   console.log(`City added to array! => [${myArr}]`);
}

myCityAdd('Barcelona')// City added to array! => [Christian,Haag,34,Barcelona]
//-----h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
	let myCityDelete = () => {
		myArr.pop();
		console.log(`City added to array! => [${myArr}]`)
	};


	myCityDelete() // City added to array! => [Christian,Haag,34]

//j) Ahora, elimina el nombre y asegura los cambios.
let myArr = ['Christian', 'Haag', 34];

let deleteName = myArr.shift();

console.log(myArr) // ["Haag", 34];
//k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() 
//estará en la última posición, como podria hacer para introducirlo en la primera posición?
let myArr = ["Haag", 34];

let unShiftName = myArr.unshift('Christian');

console.log(myArr)	


//l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let multByTwo = numbers.map(x => x * 2); 
	
console.log(multByTwo) //[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

	//l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let choice = 3;

function multByNum(choice){
	let arrayMult = numbers.map(x => x * choice);
	return arrayMult;
};

multByNum(choice) //[3, 6, 9, 12, 15, 18, 21, 24, 27, 30]

//m) Podrías mostrarlos en el orden inverso?
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let choice = 3;

function multByNum(choice){
	let arrayMult = numbers.map(x => x * choice);
	return arrayMult.reverse();
};

multByNum(choice)//[30, 27, 24, 21, 18, 15, 12, 9, 6, 3]

//n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?

function countRepLetters(myName){

	 const spelledOut = [];

/*1*/let nameLetters = myName.split(' ').map(word => { word.toUpperCase().split('').forEach(letter => spelledOut.push(letter)) });

/*2*/const countLetters = spelledOut.reduce((allLetters, letter) => (!allLetters[letter] ? allLetters[letter] = 1 : allLetters[letter]++, allLetters), {});

/*3*/let filtered = Object.keys(countLetters).filter( key => countLetters[key] > 1)
										.reduce((newObj, key) => (newObj[key] = countLetters[key], newObj), {} );

/*4*/filtered = Object.entries(filtered);

	 let answer = filtered.forEach(function(element){
				console.log(`${myName.toString()}, the letter '${element[0]}' => ${element[1]} times `)
				});

   console.log(answer) 

};  

countRepLetters('Christian Haag') //Christian,Haag, the letter 'h' => 2 times 
                    			  //Christian,Haag, the letter 'i' => 2 times 
                  	              //Christian,Haag, the letter 'a' => 3 times 

 

//n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras.

function countNonRepLetters(myName) { 

	const spelledOut = []


	let nameLetters = myName.toUpperCase().split(' ').map(word => word.split('').forEach(letter => spelledOut.push(letter)))


	const countLetters = spelledOut.reduce((allLetters, letter) => (!allLetters[letter] ? allLetters[letter] = 1 : allLetters[letter]++, allLetters), {})

	let filtered = Object.keys(countLetters).filter(key => countLetters[key] < 2)
										.reduce((newObj, key) => (newObj[key] = countLetters[key], newObj), {});


	filtered = Object.entries(filtered).flatMap((x) => x.filter(elem => elem != 1));
//logs all elements from the array.
	let answer = `${myName}, the letters => ${filtered} are not repeated, the name is => ${filtered.join('')}` 

   console.log(answer)

};

countNonRepLetters('Christian Haag') //Christian Haag, the letters => C,R,S,T,N,G are not repeated, the name is => CRSTNG

/* Algunas notas del exercicio N y N1

 
 1) Option 1..Push string into array where each letter is a diferent value.
    Option 2  Loop over an Array and push each letter as a new value:
	
				for (let i = 0; i < myName.length; i++) {
					for (let j = 0; j < myName[i].length; j++) {
					spellOut.push(myName[i][j].toLowerCase());
					};
				};
2)Parse over the Array and count all matches. It uses the Array.prototype.reduce() method to parse over the array and check wether a letter is repeated or not.
	If the condition is True it counts 1 each time, if its false it changes the value of the [key] to 1.
3)It iterates over the object's Key values filtering only those key values that are greater than 1.
4)Turns an object into an array.
	*/


//TERCERA PARTE----------------NUMBERS

//a) Que hora es? Declara la hora como número y devuelvela como String
let hour = 23.15;

let stringifyHour = hour.toString();

console.log(`It's ${stringifyHour} pm`) //It's 23.15 pm

//b) b) Nono, que hora exactamente? Dime la hora sin minutos!
let hour = 23.15;

let stringifyHour = hour.toFixed();

console.log(`It's ${stringifyHour} pm`) //It's 23 pm

//c) Ahora, declara tu hora y muéstrala redondeada.
const myHour = (date) =>  console.log( Math.round(Number(`It's ${date.getHours()}.${date.getMinutes()} am`)))


myHour(new Date()) //It's 23 pm

//d,d1,d2,d3) Hagamos una calculadora. Primero, la suma. Crea variables con valores distintos y súmalos.

const calculate = (num1, num2) => { console.log(`The sum, substraction, multiplication and division of ${num1} and ${num2} is: ${num1 + num2}, ${num1 - num2}, ${num1 * num2} and ${(num1 / num2).toFixed(2)}`)};

calculate(15, 9)

//d4) Ahora, intenta multiplicar un número por una string, que devuelve?

calculate(15 * 'hour')// devuelve: NaN

//e) Podemos controlar este error con un condicional if?

let calculate = (num1, num2) => {(isNaN(num1) || isNaN(num2)) ? console.log(`You cannot do this operation!`) : console.log(`${num1} x ${num2} = ${num1 * num2}`)};

calculate(5, 3) //5 x 3 = 15
calculate(5, 'three') //You cannot do this operation!