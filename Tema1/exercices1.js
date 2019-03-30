// a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.
function userData(myName) {
	console.log('hello ' + myName);
}
userData('Christian');

//b)Intenta retornar los valores en lugar de usar console.log.
function userData(myName) {
	return 'hello ' + myName;
}
userData('Christian');

//c) Ahora, añade tu edad y concaténala al return 
//----OPTION 1----
function userData() {
	let myName, myAge, myMessage
	myName = 'Christian';
	myAge = 34;
	myMessage = "hello " + myName + ", you're " + myAge + " old."
	return myMessage
}
userData()
//----OPTION 2----
const userData = (myName, myAge) => {
	return "hello " + myName + ", you're " + myAge + " old.";
};
userData('Christian', 34);

//d) Iguala tu función a una variable y ejecútala.
let myFunction = function(myName, myAge) {
	return "hello " + myName + ", you're " + myAge + " old.";
};
myFunction('Christian', 34);

//e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados.
let myName = function(){
	return 'Christian'
};

let myAge = function(){
	return 34;
};

myName() + ' ' + myAge();

//f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.
let name = function myName(param1){
	return param1;
};

let age = function myAge(param2){
	return param2;
};

name('Christian') + ' ' + age(34);

//g)g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas. 
//(En el ejemplo tenemos la function "personData" que engloba la function name y age, cada una es una función hija o anidada dentro de la función personData).
function userData(param1, param2){

	let name = function(){
	return param1;
	};

	let age = function(){
	return param2 ;
	};

	return name() + " " + age();
};

userData('Christian', 34);

//h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()
function userData(param1, param2){

	let name = function(){
	return param1;
	};

	let age = function(){
	return param2;
	};
  
  	let random = function(){
    return Math.floor(Math.random() * 10000000)
  	};
  
age = random;
  
return name() + " " + age();

};

userData('Christian');

//i) Al return de la función name(), concaténale otro mensaje
function userData(param1, param2){

	let name = function(){
	return "Nice to see you again " + param1 + " !";
	};

	let age = function(){
	return "for being " + param2 + " years old you look amazing!" ;
	};
  
  
return name() + " " + age();

};

userData('Christian', '34');

//j) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable
function userData(param1, param2){

	let name = function(){
	return "Nice to see you again " + param1 + " !";
	};

	let age = function(){
	return "for being " + param2 + " years old you look amazing!" ;
	};
  
  
return "The first function returns: " + name() + ", The second function returns: " + age();

};

UserData('Christian', '34');

//k) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada.
function userData(param1, param2){

	if(param1 != 'Christian'){
		return param1 + "... You are not Christian!";
	} else {

		let name = function(){
		return "Nice to see you again " + param1 + " !";
		};

		let age = function(){
		return "for being " + param2 + " years old you look amazing!" ;
		};
  
  
		return "The first function returns: " + name() + ", The second function returns: " + age();
	}

};

userData('Christian', '34');
