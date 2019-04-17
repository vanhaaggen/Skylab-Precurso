//PROYECTO 1 -- Calculadora.

function calculator(num1, num2) {
  
  const result = [];
  
  if(typeof num1 == 'number' && typeof num2 == 'number') {
    
     function sum() {
      let resultSum = num1 + num2;
      resultSum = resultSum.toFixed(2)
      return `${num1} + ${num2} = ${resultSum}`
    };
    function sub() {
      let resultSub = num1 - num2;
      resultSub = resultSub.toFixed(2)
      return `${num1} - ${num2} = ${resultSub}`
    };
    function mult() {
      let resultMult = num1 * num2;
      resultMult = resultMult.toFixed(2)
      return `${num1} x ${num2} = ${resultMult}`
    };
   	function div() {
      let resultDiv = num1 / num2;
      resultDiv = resultDiv.toFixed(2)
      return `${num1} \xF7 ${num2} = ${resultDiv}`
    };
    
    result.push(sum());
    result.push(sub());
    result.push(mult());
    result.push(div());
    
    console.log('Query result: \n' + result.join('\n'));
    
  } else if (typeof num1 == 'number' && (num2 == null || typeof num2 != 'number')) {
    console.log('the (\u221A) Square Root of ' + num1 + ' is: ' + Math.sqrt(num1).toFixed(2));
    
  } else if (typeof num1 != 'number' && typeof num2 == 'number') {
    console.log('the (\u221A) Square Root of ' + num2 + ' is: ' + Math.sqrt(num2).toFixed(2));
     
  } else {
    console.log('Please enter a number');
  };
   
    
};

calculator(/*put numbers here*/)