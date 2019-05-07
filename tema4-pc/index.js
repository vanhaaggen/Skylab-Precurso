
//CSS style----------
let s1 = ['font-size: 15px', 'color: black','text-decoration: underline'].join(';');
let s2 = ['font-size: 18px', 'color: white', 'background: #00a8ff'].join(';');
let s3 = ['font-size: 35px', 'color: white', 'background: #00a8ff', 'font-weight: bold', 'text-shadow: 0 0 black, 0 0 black, 1px 1px 1px #9208c9, 0 0 black'].join(';');
let s4 = ['font-size: 15px;color: #08c938', 'font-size: 15px; color: #049ae5','font-size: 15px; color: #ef042f' ]
let s6 = ['font-size: 14px','background: #00a8ff','border-radius: 10px 10px', 'color: white', 'padding: 5px'].join(';')
let s7 = ['font-size: 12px'].join('');
let s8 = ['font-size: 15px', 'background: #737c84', 'color: #fff', 'padding: 6px 6px', 'line-height: 15px', 'border: 2px solid black'].join(';')
let s9 = ['font-size: 15px; background: #ff7b4e; color: white','font-size: 15px; font-weight: bold; background: #ff7b4e; color: white']
let s10 = ['font-size: 15px; color: white; background: #08c938; border-radius: 10px 10px', 'background-image: url("https://media.giphy.com/media/EI1EHOldds5KU/giphy.gif"); background-size: cover; padding: 50px 70px; color: white; font-size: 15px']




const pasapalabra = {
    _data: {
        _user: {name:[], points: 0, noName:1},
        _score: [],
        _letters: 'a b c d e f g h i j k l m n ñ o p q r s t u v w x y z',
        _q: [{ letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
        { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
        { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
        { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
        { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
        { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
        { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
        { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
        { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
        { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
        { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
        { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
        { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
        { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
        { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
        { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
        { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
        { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
        { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
        { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
        { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
        { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
        { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
        { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
        { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
        { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}],

        get user(){
            return this._user
        },
        set user(userIn){
          this._user = userIn
        },
        get letters(){
          return this._letters
        },
        get score(){
          return this._score;
        },

        get q(){
            return this._q;
        },    
    },

    addUserToScore(name, points){
      let users = {
          name,
          points    
      };
      this._data.score.push(users)
  },

    resetUserData(){
      this._data.user.points = 0
      this._data.q.map(x => x.status = 0);
    },

    incrementPoints(){
        this._data.points ++
    },

    askName(){
        let name = prompt(`Cómo te llamas?`)
        this._data.user.name = name === '' ? `Jugador ${this._data.user.noName}` : name;
        console.log(`--------------------------------\n\n%c Bienvenido ${name === '' ? `Jugador ${this._data.user.noName}` : name } a: \n%c Pasapalabra `,s2, s3);
        this._data.user.noName++;
    },

  
    gameFlow(){
      
      let copyArray = [...this._data.q];
      let revQuestions = copyArray.reverse();
      let s = [];
      for(let i = revQuestions.length - 1 ; i >= 0; i--){
          console.log(`--------------------------------\n\%c ${revQuestions[i].question} `, s6)
          let p = prompt(revQuestions[i].question);
          let answer = revQuestions[i].answer;
            if(p !== null){
              if(p.toLowerCase() === answer){
                  revQuestions[i].status == 2 ? s[revQuestions[i].sIndex] = 'text-transform: uppercase; border-radius: 10px 10px; background: #08c938; font-size: 15px; color: white' : s.push('text-transform: uppercase; border-radius: 10px 10px; background: #08c938; font-size: 15px; color: white');
                      revQuestions[i].status = 1;
                      this._data.user.points++;
                      console.log(`%cCorrecto, tienes 1 punto!\n%cTu Respuesta: ${p.toLowerCase()}\n`, s4[0],s7);
              }else if(p.toUpperCase() === 'PASAPALABRA'){
                      revQuestions[i].status = 2
                      revQuestions[i]['sIndex'] = s.length
                      let splice = revQuestions.splice(i, 1)
                      Array.prototype.unshift.apply(revQuestions, splice)
                      s.push('text-transform: uppercase; border-radius: 10px 10px; background: #049ae5; font-size: 15px; color: white');
                      console.log('%cPasapalabra', s4[1])
                      i++
              }else if(p.toUpperCase() === 'END'){
                  console.log(`%c Has abandonado la partida con %c${this._data.user.points}%c aciertos. `, s9[0],s9[1],s9[0])
                  this.newGame();
                  break;
              }else if(p === '' || p.toLowerCase() !== answer){
                    revQuestions[i].status == 2 ? s[revQuestions[i].sIndex] =  'text-transform: uppercase; border-radius: 10px 10px; background: #ef042f; font-size: 15px; color: white' : s.push('text-transform: uppercase; border-radius: 10px 10px; background: #ef042f; font-size: 15px; color: white');
                    revQuestions[i].status = 1;
                    this._data.q.status = 1
                    console.log(`%cIncorrecto\n%cTu Respuesta: ${p.toLowerCase()}\nRespuesta correcta: ${revQuestions[i].answer}`,s4[2],s7);
              };
            }else{
                 break;
            };

         let letters = this._data.letters.split(' ').map(x => '%c '+x).join(' ');
         console.log(letters,
          //a    b    c    d    e    f    g    h    i    j    k     l     m     n     ñ     o     p     q     r     s     t     u     v     w     x     y     z
          s[0],s[1],s[2],s[3],s[4],s[5],s[6],s[7],s[8],s[9],s[10],s[11],s[12],s[13],s[14],s[15],s[16],s[17],s[18],s[19],s[20],s[21],s[22],s[23],s[24],s[25],s[26]);    
      };

      if(revQuestions.every(value => value.status == 1)){
          console.log(`\n%c Fin de la partida `, s1);
          this.addUserToScore(this._data.user.name, this._data.user.points);
          revQuestions.length = 0;
          this.userScore();
          this.resetUserData();
          this.newGame();
          };
    },
    

    userScore(){
      console.log(`%c Nombre: ${this._data.user.name}, Aciertos: ${this._data.user.points} `, s8);
    },

    scoreTable(){
      console.log('%c Ranking ',s1)
      console.table(this._data.score)
      let filter =  Object.values(this._data.score).filter(val=> val.points).sort((a, b) => b.points - a.points).slice(0,1);
      filter.forEach(val => console.log(`%c El ganador es: ${val.name}, con ${val.points} ${val.points > 1 ? 'aciertos' : 'acierto'} \n%c Felicidades ${val.name}! `, s10[0],s10[1] ));
    },
    newGame(){
      let p = prompt(`Nueva partida?\n0 ---Si\n1 ---No\n2 ---Ranking`)
      if(p){
        if(p === '0'){
          this.startGame();
        }else if (p === '1'){
          console.log('%cGracias por jugar!', s4[1])
        }else if(p === '2'){
          this.scoreTable();
        }
      }else{
        return;
      };
    },

    startGame(){
      this.askName();
      let p = confirm('Estas listo?')
      if(p){
        this.gameFlow();
      }else{
        return;
      }; 
    }
};

pasapalabra.startGame();