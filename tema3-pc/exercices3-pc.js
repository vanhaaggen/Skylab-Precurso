//TEMA 3 Objects
//OBJETO
let avenger = {
    name : "Tony",
    class : "VII",
    id : 1
};


//---------------------------------------------
//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)

/*Option 1 for(..in)*/
function listObj(){
    let txt = ''
    for(let obj in avenger){
    txt += obj + ' ' 
    }
    console.log(txt)
    }
listObj();// name class id
         /*Option 2*/
        function listObj2(){
             Object.getOwnPropertyNames(avenger)//['name','class','id']
        }


//b) Ahora, crea una función que liste solo los valores de las propiedades.
function lsVal(){
    let txt = ''
    for(let obj in avenger){
         txt += avenger[obj] + ' ';
    }
    console.log(txt)
};
lsVal();
        //Opcion 2
        const lsVal2 = () => Object.values(avenger).map(x => x);


//c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
avenger.class = 'XI'
console.log(avenger.class)

//d) Ahora, elimina la propiedad ID y asegura los cambios.
delete avenger.id
console.log(avenger.id)//undefined :(
    
//e) Añade una nueva propiedad, por ejemplo city y dale un valor, asegura los cambios solo imprimiendo esa nueva propiedad.
avenger.city = 'New York';
console.log(`City => ${avenger.city}`) //City => New York

//f) Lista el numero de propiedades que contiene el objeto.
console.log(`There are ${Object.keys(avenger).length} info fields`) //There are 3 info fields.

//g, g1) Cambia la propiedad name por fullName. Asegura los cambios.
avenger.fullName = avenger.name;
avenger['fullName'] = 'Tony Stark'
delete avenger.name
console.log(avenger.fullName)//Tony Stark

//h) Lista todas las propiedades del objeto a través de un console.log()
console.log(`Hi there, I'm ${avenger.fullName}, I'm a class ${avenger.class} superhero who lives and protects ${avenger.city}.`)//Hi there, I'm Tony Stark, I'm a class VII superhero who lives and protects New York.

//h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...h2) Asegura los cambios volviendo a listar los valores del objeto.
let newInfo = {country: 'USA', job:'Build cool stuff', studies:'engineer'}
Object.assign(avenger, newInfo);
let txt = ''
for (let obj in avenger){
    txt += avenger[obj].join(', ')
}
console.log(txt)// VII, 1, Tony Stark, USA, Build cool stuff, engineer, 

//i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

function Avengers(fullName, type, city, markAv, country, job, studies){
    this.fullName = fullName;
    this.type = type;
    this.city = city;
    this.markAv = markAv;
    this.country = country;
    this.job = job;
    this.studies = studies;
    this.listProperties = function(){
        console.log(`${this.fullName}, ${this.type}, ${this.city}, ${this.markAv}, ${this.country}, ${this.job}, ${this.studies}`)
    };
    
};
let stark = new Avengers('Tony Stark', 'IV', 'NYC', 9, 'USA', 'ingeneer', 'MIT')
console.log(tonyStark);
//j) Crea otro objeto y imprime sus propiedades por pantalla.
let thor = new Avengers('Thor Odinson', 'X', 'Mittgaard', 12, 'cluster 1x032', 'GOD of Thunder', 'Valhallas University');
let hulk = new Avengers('Hulk', 'IX', 'NYC', 10, 'USA', 'engineer', 'CALTECH');
let blackPant = new Avengers('T-Challa', 'VII', 'NYC', 7, 'Africa', 'King', 'African MIT')
//k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia.
console.log(tonyStark.listProperties())//Tony Stark, XI, NYC, 10, USA, ingeneer, MIT

//l) Ahora, crea una función que solo liste los nombres de los objetos instanciados.
function n(...arg){
    let txt = ''
    let names = Object.values(arg).map(x => x.fullName);
    txt = names + ', '
    console.log(txt)
    
}
n(stark, thor, hulk, blackPant)//Tony Stark, Thor Odinson, Hulk, T-Challa,
 //Option 2
        function n(...arg){
            let txt = ''
            for (let prop in arg){
                txt += arg[prop].fullName + ', '
            }
            console.log(txt)
            
        }
        n(stark, thor, hulk, blackPant)//Tony Stark, Thor Odinson, Hulk, T-Challa,

//m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función 
//para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
function avengerInfo(...arg){
    const arr = [];
    const result = []
    arr.push(...arg)
    Object.values(arg).filter(item => item.city === 'NYC' ).forEach(x => result.push(x.fullName));
    console.log(`Are ${result.length} living in NYC: ${result.join(', ')}`)           
  };
  
  avengerInfo(stark, thor, hulk, blackPant)//Are 3 living in NYC: Tony Stark, Hulk, T-Challa

//n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.
let me = new Avengers('Christian Haag', 'III', 'Girona', 5, 'Spain', 'Unemployet', 'SkyLab coders');

function avMark(...arg){
    let arr = [];
    Object.values(arg).filter(item => arr.push(item.markAv))
    let average = arr.reduce((acc, curVal) => acc + curVal) / arr.length
    console.log(`the average of ${arr.join(', ')} is: ${average}`)
}

avMark(stark, thor, hulk, blackPant, me)

//ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, 
//por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.
  //ñ1)Intenta crear las parejas de forma aleatoria.

  function Average(fullName, markAv){
    this.fullName = fullName;
    this.markAv = markAv;
};
    
var a1 = new Average('Tony', 9);
var a2 = new Average('Bruce', 11);
var a3 = new Average('Steven', 8);
var a4 = new Average('Thor', 12);
var a5 = new Average('Clint', 6);
var a6 = new Average('Natasha', 6);
var a7 = new Average('T-Challa', 7);

function showInPairs(...obj) {
    obj.sort(() => Math.random() - 0.5);
    let couple = obj.reduce((accumulator, currentValue,index) => {
      		if(index % 2 === 0){
        			accumulator.push([currentValue])
      		} else {
        			accumulator[accumulator.length - 1].push(currentValue)
      		};
      		return accumulator
    			}, [] );
  
    let result = couple.forEach(obj => { 
        	if(obj.length === 2) {
      	  		console.log(`${obj[0].fullName} vs ${obj[1].fullName} => ${(obj[0].markAv > obj[1].markAv ? obj[0].fullName : obj[1].fullName)} is better!`) 
      		}else {
      				console.log(`I ${obj[0].fullName}, need friends!`)
    			};
    });
  	return result
};   


showInPairs(a1, a2, a3, a4, a5, a6, a7);//Tony vs Bruce => Bruce is better!
                                        //Steven vs Thor => Thor is better!
                                        //Clint vs Natasha => Natasha is better!
                                        //I T-Challa, need friends!


