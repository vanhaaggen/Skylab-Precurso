//CALCULATOR PRO
//Podrías hacer que le calculadora relizara operaciones sean cuales sean el numero de argumentos pasados a la funcion?
//Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver a realizar otra operación, volviendo a almacenar más resultados y mostrándolos.


function myFunction() {
  
let ask = prompt("Would you like to calculate again? y/n");
  
  if (ask === "y"){
      let userNumber = prompt('Enter your numbers separated by a comma.');
      calculator(userNumber);
       		

   } else {
     console.log("Please don't leave me! Calculating things is the meaning of my existence.");
   };
};


const saveResults = []
const stringArr = [];
let functionCall = 0;

function calculator(){
//numberMeBo = Number "Method Borrowing" 
	let numberMeBo = [].join.call(arguments); 
  		

  	if(numberMeBo.includes(',') == false){
  		functionCall++;
  		saveResults.push(`Calculation number ${functionCall}`,`the (\u221A) Square Root of  ${numberMeBo} is: ${Math.sqrt(numberMeBo).toFixed(2)}`,'');
  		console.log(saveResults.join('\n'));

  	} else {
			let strToArr = stringArr.push(...numberMeBo.split(','));
			let typeNumber = stringArr.map(x => parseInt(x , 10)) 

		  let sum = `Sum = ${typeNumber.reduce((acc, curVal) => acc + curVal)}`;
  		let sub = `Substraction = ${typeNumber.reduce((acc, curVal) => acc - curVal)}`;
  		let mult = `Multiplication = ${typeNumber.reduce((acc, curVal) => acc * curVal)}`;
  		let div = `Division = ${typeNumber.reduce((acc, curVal) => acc / curVal).toFixed(2)}`;

	functionCall++;
		stringArr.length = 0
  	saveResults.push(`Calculation number ${functionCall}`,sum,sub,mult,div,'');

	console.log(saveResults.join('\n'))
	
  };	
  
myFunction();

}
calculator(1,2,3,4)






