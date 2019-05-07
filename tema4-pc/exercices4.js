//a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, 
//muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, 
//cada elemento de la pareja deberá estar multiplicada por 2.
let arr = [1,2,3,4,5,6,7,8,9];

function coupleNumbers(){
	let pair = [];
	let flag = -1
	for(let i = 0; i < arr.length ; i++){
		let slice = arr.slice(arr[flag], arr[flag + 2])
			pair.push(slice.map(x => x * 2))
				flag++
	}
	let splice = pair.splice(pair.length - 1, 1)

		pair.forEach((x, i) => console.log(`${i + 1}ª pareja: ${x.join(' - ')}`))
  }

  console.log(coupleNumbers())/* 1ª pareja: 2 - 4
								 2ª pareja: 4 - 6
								 3ª pareja: 6 - 8
								 4ª pareja: 8 - 10
								 5ª pareja: 10 - 12
								 6ª pareja: 12 - 14
								 7ª pareja: 14 - 16
								 8ª pareja: 16 - 18*/
  
//a1) La funcion debería aceptar la array a tratar como argumento.
function coupleNumbers(){
	let arg = [...arguments]
	let pair = [];
	let count = -1;
	for(let i = 0; i < arg.length; i++){
		let slice = arg.slice(arg[count],arg[count + 2]);
			pair.push(slice.map(x => x * 2));
				count++
	};
	let splice = pair.splice(pair.length - 1, 1);
		pair.forEach((num, i) => console.log(`${i + 1}ª pareja: ${num.join(' - ')}`))
};

console.log(coupleNumbers(1,2,3,4,5,6,7,8,9))


//a2) Pasa también el numero a multiplicar a la función como argumento
function coupleNumbers(){
	arr = [...arguments]
	let mult = arr.splice(arr.length - 1, 1)
	let pair = [];
	let flag = - 1
	for(let i = 0; i < arr.length; i++){
		let slice = arr.slice(arr[flag], arr[flag + 2])
			pair.push(slice.map(x => x * mult))
				flag++
	}
	let splice = pair.splice(pair.length - 1, 1);
	
	console.log(`El número escojido es: ${mult}`)
	pair.forEach((x, i) => console.log(`${i + 1}ª pareja: ${x.join(' - ')}`))
  
  }
  
  console.log(coupleNumbers(1,2,3,4,5,6,7,8,9,12))//El número escojido es: 12
											//1ª pareja: 12 - 24
											//2ª pareja: 24 - 36
											//3ª pareja: 36 - 48
											//4ª pareja: 48 - 60
											//5ª pareja: 60 - 72
											//6ª pareja: 72 - 84
											//7ª pareja: 84 - 96
											//8ª pareja: 96 - 108

//a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.

function coupleNumbers(){
	arr = [...arguments]
	let mult = arr.splice(-2, 1)
	let delimiter = arr.splice(-1, 1)
	let pair = [];
	let flag = - 1
	for(let i = 0; i < arr.length; i++){
		let slice = arr.slice(arr[flag], arr[flag + 2])
			pair.push(slice.map(x => x * mult))
				flag++
	}
	let splice = pair.splice(pair.length - 1, 1);
	
	console.log(`El número escojido es: ${mult}`)
	let delimit = pair.slice(0, delimiter)
	delimit.forEach((x, i) => console.log(`${i + 1}ª pareja: ${x.join(' - ')}`))
  
  }
  
  console.log(coupleNumbers(1,2,3,4,5,6,7,8,9, 12, 3))//El número escojido es: 12
													  //1ª pareja: 12 - 24
													  //2ª pareja: 24 - 36
													  //3ª pareja: 36 - 48



//b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?
//b2) Puedes añadir además, la posición de cada resultado?
//b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.
//b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.
function fibo(num){
	let a = 1, b = 0, temp;
    let arr = []
	for(let i = 0; i < num; i++){
		temp = a;
		a = a + b;
		b = temp
		arr.push(b)
	};
	arr.forEach((x, i) => console.log(`pos ${i + 1}º: ${x}`)) 	
};
fibo(10)//pos 1º: 1
		//pos 2º: 1
		//pos 3º: 2
		//pos 4º: 3
		//pos 5º: 5
		//pos 6º: 8
		//pos 7º: 13
		//pos 8º: 21
		//pos 9º: 34
		//pos 10º: 55
		
		
//b5) Ahora, muestra los resultados en forma piramidal:
function fibo(n){
	let print = '0 ', a = 1, b = 0, temp;  
		for(let i = 0; i <= n; i++){
  		temp = a ;
  		a = a + b;
  		b = temp 
  		print = print + b + ' '
  	console.log(print) 
	};
	for(let i = 0; i < n; i++){
  	let print2 = '0 ', c = 1, d = 0, temp2; 
  		for(let j = 0; j < n - i; j++){
    		temp2 = c;
  			c = c + d;
 	 			d = temp2 
  			print2 = print2 + d + ' '
    };
    console.log(print2)
  }; 
}
fibo(10)
//01
//011
//0112
//01123
//011235
//0112358
//011235813
//01123581321
//0112358132134
//011235813213455
//01123581321345589
//011235813213455
//0112358132134
//01123581321
//011235813
//0112358
//011235
//01123
//0112
//011
//01

//c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, 
//creando un nuevo código.

let code = 3712

function script(param){
  let toArr = param.toString().split('')
  	toArr.push( toArr.shift());
  		let result = Number(toArr.join(''));
				code = result
					console.log(result)
}
script(code) //7123, 1237, 2371, 3712

//c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados
// (Los dos códigos se deberían encriptar en la misma función)

let code1 = 3712
let code2 = 5874

function script(){
  let scripts = []
	for(let arg of arguments){
    let arr = arg.toString().split('');
			arr.push(arr.shift());
				scripts.push(Number(arr.join('')))
  }
  code1 = scripts[0];
  	code2 = scripts[1]
			console.log(scripts)
}
script(code1, code2)//7123, 8745/ 1237, 7458/ 2371, 4587/ 3712, 5874

//c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos 
//a cada miembro por un numero cuya multiplicación no sea superior a 10. (Si es superior a 10, conseguiremos una multplicación 
//de dos digitos y el código ya no sería de 4 valores)
let code = 3712

function script(param){
  let toArr = param.toString().split('')
    toArr.push( toArr.shift());
  		toArr = toArr.map(x => x < 5 ? x* 2 : x)
  		  let result = Number(toArr.join(''))
				  code = result
					console.log(result)
}
script(code) //7246, 4867, 8678, 6788, 7886, 8867

//c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un 
//código encriptado (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.
 function decrypter(){
	 scripts.map(x)
 }