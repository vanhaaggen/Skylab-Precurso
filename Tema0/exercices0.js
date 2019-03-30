//a) Declara tu nombre
let name = "Christian";
console.log(name); 

//b) declarar edad
let age = 34;
console.log(age);

/*c) Declara tu nombre, tu apellido y tu edad 
en un array en diferentes posiciones y muéstrala por consola*/
const info = ["Christian", "Haag", 34];
console.log(info);

//d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:
const data = {
	name: 'Christian',
	age: 21
}
console.log(data);

/*e) Ahora utiliza el array que has creado anteriormente 
para recorrerlo y mostrar una a una todas las posiciones del array*/
for(let i = 0; i < info.length; i++) {
	 console.log(info[i]);
};

/*f) Crea una estructura condicional que imprima el número 
mayor entre dos números*/
	/*f1) Crea otra condicion else if para contemplar 
	la posibilidad de que los dos números sean iguales:*/
var a = 15;
var b = 15;

if(a > b) { /*f*/
	console.log(a);
} else if(a === b) { /*f1*/
	console.log("The numbers are equal");
};

/*g) Recorre un array de 5 números y cuando llegues 
a la mitad muestra el siguiente mensaje: 'We are in the middle of loop'.*/	
const arr = [1, 2, 3, 4, 5];
for(let i = 0; i < arr.length; i++){
	//console.log(arr[i])
	if(arr[i] === arr[2]){
		console.log("We are i the middle of loop");
	}
};
/*g1) Declara tu nombre y tu edad en dos variables y crea un condicional 
para, en caso de no coincidir con tus datos, mostrar un error.*/
let myName = "Christian";
let myAge = 34;

if(myName != "Christian" || myAge != 34) {
	console.log("this is not you!");
} else {
	console.log("Hi! Glad to see u again");
};

/*h) Declara tu nombre y DNI en dos variables y crea un condicional para, 
en caso de que coincida uno de los dos datos, muestre un mensaje.*/
let myName = "Christian";
let myId = "X0654880R";

if(myName === "Christian" || myId === "X0654880R") {
	console.log("Permission granted");
} else {
	console.log("Try again.");
};

/*i) Crea un array, introduce los datos anteriores y unos cuantos más de forma 
que al recorrer el array muestre un mensaje cuando encuentre tus datos.*/

const myData = ["Louis", "Annie", 34, "John", 44, "Christian", 25, "X05846592", "A151424521R", "X0654880R", 55];

for(let i = 0; i < myData.length; i++){
	if(myData[i] === "Christian") {
		console.log("We find your data! " + myData[i]);
	}
};

// j) Crea un array de strings y recorre cada una de esos valores. Imprime cada caracter en una línea distinta.
let arr = ["hello","world","Skylab"];

for(let i = 0; i < arr.length; i++) {
	for( let j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}	
};
