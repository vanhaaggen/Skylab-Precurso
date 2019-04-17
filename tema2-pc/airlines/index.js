//PROYECTO2-----------------Skylab Airlines!
/*Programa una inferfaz de usuario para una aerolinea (por terminal...). 
Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:*/

//CSS3 styles:
let s1 = ['font-size: 25px', 'font-weight: bold', 'color: #009ee2'].join(';');
let s1a = ['font-size: 25px', 'font-weight: bold', 'color: #3b3a3a'].join(';');
let s2 = ['font-size: 25px', 'background-color: DodgerBlue', 'color: white'].join(';');
let s3 = ['font-size: 18px'].join('');
let bold = ['font-weight: bold'].join('');
let del = ['background-color: #f74a11', 'color: white', 'font-size: 15px'].join(';');
let s4 = ['font-size: 15px', 'text-decoration: underline'].join(`;`);
let s5 = ['background-color: #2e35f7', 'color: white', 'font-size: 15px'].join(';');
let s6 = ['background-color: #2e35f7', 'color: #fcfc07', 'font-size: 15px', 'font-weight: bold'].join(';');
let s7 = ['background-color: #1cefac', 'color: black ', 'font-size: 15px'].join(';');
let b1 = ['font-size: 20px'].join('');
let b2 = ['font-size: 16px'].join('');
let b3 = ['font-size: 40px'].join('');
let b4 = ['background-color: DodgerBlue', 'font-size: 40px'].join(';');
//------------------------------------------------------------------------

let flights = [
  { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
  { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
  { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
  { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
  { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
  { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
  { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
  { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
  { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
  { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
  { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
];

//------------GENERAL INTERFACE---------------------------------
 
function interface(){
 
  let ask = prompt('Quién eres? Introduce:\n1 --ADMINISTRADOR\n2 --USUARIO')
      ask === '1' ? adminInt() : '';
      ask === '2' ? userInt() : '';
  
};

//--------------------------------------------------------------

//-----------------------ADMIN Interface----------------------
function adminInt(){
  console.log(clear())
  alert('Interfaz de Administrador');
  let askAdmin = prompt('Qué acción quieres realizar? Introduce:\n1 --Para CREAR\n2 - -Para ELIMINAR\n3 --Para volver a la interfaz general');
     if(askAdmin){ 
          if(askAdmin === '1'){
              create();
          } else if(askAdmin === '2'){
              erase();
          } else if(askAdmin === '3'){
              interface();
          } else {
          alert('Porfavor introduzca una opción!')
          adminInt();
          ;}
      } else {
          return;
      };
};

function create(){
  alert('Opción CREAR activada');
  addFlight();
  createCondition();
  function createCondition(){
      let doNext = prompt('Qué accion quieres realizar?\n1 --Para CREAR\n2 --Para volver ATRAS');
          if(doNext){
              if(doNext === '1'){
                  addFlight();
                  createCondition()
              } else if(doNext === '2'){
                  adminInt()
              } else {
                  alert('introduce un Numero valido')
                  createCondition()
              };
          } else {
              return;
          };
  };   
};3

function erase(){
  alert('Opción ELIMINAR activada');
  getFlights()
  removeFl();
  eraseCondition();
  function eraseCondition(){
      let check = prompt('1 --Papelera\n2 --Eliminar\n3 --Atrás');
      if(check){
          if(check === '1'){
            clear();
            console.log(`%cVuelos borrados:`,s3)
               Object.values(rmvArr).forEach(item =>  console.log(`%c Id original: ${item.id}, Origen: ${item.from}, Destino: ${item.to}, Coste: ${item.cost} \u20ac, Escala: ${item.scale === false ? 'SI' : 'NO'} \n\n`, del));
              eraseCondition();
          } else if(check === '2'){
              removeFl();
              eraseCondition();
          } else if(check === '3'){
              adminInt();
          } else {
              alert('Introduce un numero valido!');
              eraseCondition();
          };
      } else {
         return;
      };  
  };
};
//--------------------------------------------------------------

//---------ADMIN Functions--------------------------------------
function addFlight(){
  let to = prompt(`Introduzca un destino.`);
    if(to === ''){
        alert('Porfavor introduzca un destino')
        addFlight();
    } else if(to === null){
        return false;
    }
  let from = prompt(`Introduzca un origen.`);
    if(from === ''){
        alert('Porfavor introduzca un destino')
        addFlight();
    } else if(to === null){
        return false;
    }


  let id = flights.length;
  let cost = Math.floor(Math.random()* (1600 - 150) + 150);
  let scale = Math.round(Math.random()) == 1 ? true : false; 

  flights.length <= 15 ? flights.push({id, to, from, cost, scale}) : (confirm('Para continuar tienes que borrar vuelos') ? adminInt() : '')

  Object.values(flights).forEach(item => { 
     item.id >= 11 ? console.log(`%c ID: ${item.id} Origen: ${item.from}, Destino: ${item.to}, Coste: ${item.cost} \u20ac, Escala: ${item.scale === false ? 'SI' : 'NO'} \n\n`,s7) : console.log(`%c ID: ${item.id} %cOrigen: %c${item.from}%c, Destino: %c${item.to}%c, Coste: ${item.cost} \u20ac, Escala: ${item.scale === false ? 'SI' : 'NO'} \n\n`,s5,s6,s5,s6,s5);
  })
  checklenght();
  
};


function checklenght(){
  flights.length > 15 ? alert(`Has llegado al limite de 15 vuelos! Borra vuelos`) : '';
}


const rmvArr = []


function removeFl(){
  
  let param = prompt('Introduzca ID del vuelo que quiere eliminar.');
      if(param >= '0'){
        clear();
        let remove = flights.splice(param, 1);
        flights.map((curVal, index) => {return curVal.id = index});
        param == Object.values(flights).forEach(item =>  console.log(`%c Id: %c${item.id}%c, Origen: %c${item.from}%c, Destino: %c${item.to}%c, Coste: ${item.cost} \u20ac, Escala: ${item.scale === false ? 'SI' : 'NO'} \n\n`,s5,s6,s5,s6,s5,s6,s5)) 
       
        
        rmvArr.push(...remove);
      } else {
        return;
      };
      if (flights.length == 0){
        alert('-------Larga vida al--------\n------- ELIMINADOR ---------')
        erase()
      };
  };
//-------------------------------------------------------------

//------------------------USER interface------------------------

function userInt(){
  console.log(clear())
  alert('Interfaz de Usuario');
  getFlights();
  let askUser = prompt('1 --Comprar vuelo\n2 --Volver a la interfaz general')
    if(askUser){
       if(askUser === '1'){
          getFlightClass();
       } else if(askUser === '2'){
           interface();
       };
    } else {
        return;
    };
};

//--------------------------------------------------------------

//-----------USER functions------------------------------------

average = (((Object.values(flights).map(value => value.cost).reduce((acc, curVal) => acc + curVal)) / flights.length).toFixed(2));

function getFlightClass(){
  
    let answer = prompt('Escoje una categoria de vuelo: Introduce\n1 --Priority class\n2 --Business class\n3 --Tourist class');
   

    if(answer){
        switch(answer){
          case '1':
              priority();                                                      
             break;
          case '2':
              middle();
              break;
          case '3':
              lowClass();  
            break;
          default:
            alert('Introduzca una classe!')
            getFlightClass();
        };
       } else {
          return;
       };


    function buyFlight(){
        let buy = prompt('Introduce la Id del vuelo para efectuar la compra.')
        Object.values(flights).filter(value => value.id == buy).forEach(value => console.log(`%cGracias por comprar el vuelo con destino a ${value.to}`, s2));
        let print = confirm('Quiere imprimir la targeta de embarco?\nSi --Aceptar\nNo --Cancelar')
        if(print){
          clear()
          console.log(`    %cENJOY YOUR TRIP!
   ____________________________________
   ||||%cSKY %cLAB %cAirlines%c|||||||
   ||||||||||||||||||||||||||||||||||||%c
 |BOARDING PASS|%c
   ||||||||||||||||||||||||||||||||||||%c
 |  |▀▄▄.■█▀|  |
 |  |■▀▄█■▄▀|  |
 |  |▀ ■▀..■|  |
 |  %c ${myDate()}     %c |
 |░░░░░░░░░░░░░|
 |%c░░░░░░░░░░|¦|%c|
 └-------------┘`,b2,s1,s1a,s2, b2,b3,b2,b3,b2,b3,b4,b3)  
        } else {
          return
        }        
    };

    function priority(){
        
        console.log(`%cVuelos de classe Priority:`,s4);
        let prior = Object.values(flights).filter(curVal => curVal.cost > average).sort((a, b) => b.cost - a.cost).splice(0, 3);
        prior.forEach(item => console.log(`%cNumero ID: %c${item.id}%c, Origen: %c${item.from}%c, Destino: %c${item.to}%c, Coste: ${item.cost}, Escala: ${item.scale == true ? 'SI' : 'NO'}\n\n`, s5,s6,s5,s6,s5,s6,s5));
        buyFlight();
    };

    function middle(){
      console.log(`%cVuelos de classe Business:`,s4)
      let mid = Object.values(flights).filter(value => value.cost >= 200 && value.cost <= 800);
      mid.forEach(item => console.log(`%c Id: %c${item.id}%c, Origen: %c${item.from}%c, Destino: %c${item.to}%c, Coste: ${item.cost}, Escala: ${item.scale == true ? 'SI' : 'NO'}\n\n`, s5,s6,s5,s6,s5,s6,s5))
      buyFlight();
  };

    function lowClass(){
        
        console.log(`%cVuelos de classe Turista:`,s4);
        let low = Object.values(flights).filter(curVal => curVal.cost < average).sort((a, b) => a.cost - b.cost);
        low.forEach(item => console.log(`%cNumero ID: %c${item.id}%c, Origen: %c${item.from}%c, Destino: %c${item.to}%c, Coste: ${item.cost}, Escala: ${item.scale == true ? 'SI' : 'NO'}\n\n`, s5,s6,s5,s6,s5,s6,s5));  
        buyFlight();
    };

   
    
  };  

//-------------------------------------------------------------


function myDate(){

  const month = ['Enero','Febrero','Marzo', 'Abril', 'Mayo','Junio','Julio ','Agosto','Septiembre','Octubrer', 'Noviembre','Diciembre']

  let n =  new Date();
  let y = n.getFullYear();
  let m = n.getMonth();
  let d = n.getDate();

  for (let i = 0 ; i < month.length; i++){
      i === m ? m = month[i] : '';
  };
  return d + ' de ' + m + ' del ' + y
};


for (let obj in flights){
  flights[obj].to = (flights[obj].to).toUpperCase().split('').join('|');
  flights[obj].from = (flights[obj].from).toUpperCase().split('').join('|');
}



    

    function askName(){
      let name = prompt(`Bienvenidos a Skylab Airlines!\nCómo te llamas?`);
      console.log('%cSKY'+'%cLAB '+'%c Airlines ', s1, s1a, s2)
      console.log(`%cHola ${name === '' ? 'forastero/a' : name}! Me alegro de conocerte.\n\n`, s3);    
    };

   

    function getFlights(){

        console.log(`%cPanel de vuelos disponibles para hoy %c${myDate()}`, s4,s3);

        Object.values(flights).forEach(item => { 
          let result = console.log(`%c Id: %c${item.id}%c, Origen: %c${item.from}%c, Destino: %c${item.to}%c, Coste: ${item.cost} \u20ac, Escala: ${item.scale === false ? 'SI' : 'NO'} \n\n`,s5,s6,s5,s6,s5,s6,s5);
          return result;
        });  
    };


    const getAveragePrice = () => {
      let average = ((Object.values(flights).map(item => item.cost).reduce((acc, curVal) => acc + curVal)) / flights.length).toFixed(2);
      console.log(`%cEl coste medio de los vuelos es de ${average}\u20ac.\n\n`, s3);
    };


    function getScale(){
      Object.values(flights).filter(item => item.scale === true).forEach(item => console.log(`%c Vuelo de %c${item.from}%c, con destino a %c${item.to} \n\n`,s5,s6,s5,s6 ))
    } 


    function filterLastFive(){ 
      flights.slice(-5).forEach(item => console.log(`%c Origen: %c${item.from}%c, Destino: %c${item.to}%c, Coste: ${item.cost} \u20ac, Escala: ${item.scale === false ? 'SI' : 'NO'} \n\n`,s5,s6,s5,s6,s5 ));
    };



    askName();
    getFlights();
    getAveragePrice();

    console.log(`%cDestinos con escala:`, s4)
    getScale();

    console.log(`%cLos últimos 5 vuelos:`,s4);
    filterLastFive();

interface()
