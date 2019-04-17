//-------css3 style
let s1 = ['font-size: 18px', 'color: #3b3a3a'].join(';');//nombre
let s2 = ['font-size: 18px', 'background-color: #00ff77', 'color: #3b3a3a', 'border-radius: 10px'].join(';');//titulo
let s3 = ['font-size: 18px', 'background-color: #f2f4b2', 'color: #3b3a3a'].join(';');//tiquet
let s4 = ['font-size: 18px', 'background-color: #3b3a3a ', 'color: #00ff77'].join(';');//bingo
let s5 = ['font-size: 18px', 'text-decoration: underline', 'color: #3b3a3a'].join(';')//info



const bingo = {
    _data:{
        _user: {name:[], balls:[], points: 0},
        _score:[],
        _carton: {original: [], copy:[]},
        _randomNum: [],
        _trigger :{ oneLine: true, 
            twoLines: true,
            threeLines : true},
     
        get user(){
            return this._user;
        },
        set user(userData){
            this._user.name = userData;
            this._user.balls = userData;
            this._user.points = userData;
        },

        get score(){
            return this._score;
        },
    
        get carton(){
            return this._carton;
        },

        set carton(newCarton){
           this._carton.copy = newCarton;
        },

        get randomNum(){
            return this._randomNum;
        },
        set randomNum(randomNumIn){
            this._randomNum = randomNumIn;
        },

        get trigger(){
            return this._trigger;
        },
        set trigger(triggerIn){
            this._trigger = triggerIn
        }
    },
    
    triggerStat(boolean){
        this._data.trigger.oneLine = boolean
        this._data.trigger.twoLines = boolean
        this._data.trigger.threeLines = boolean
      },

      
    addGamertoRanking(name, balls, points){
        let users = {
            name,
            balls,
            points,
        };
        this._data.score.push(users)
    },

    copyObj(){
        let originalObj = this._data.carton.original;
        let objCopy = this._data.carton.copy;
        for(let value in originalObj) objCopy[value] = originalObj[value]
    },

    
    getUserName(){
        let n = prompt('Whats your Name?');
        if(!n){1
            return this.getUserName();
        }else{
            this._data.user.name = n;
            console.log(`%cHi ${n === '' ? 'Stranger' : n}!\nWellcome to %c Balyks BINGO 🍀🍀🍀`,s1,s2)   
        };
    },

    getRandomNumber(){
        let randomize = Math.floor(Math.random()* 15 + 1);
        this._data.randomNum = randomize;
        this._data.user.balls++
       
    },

    getNewCarton(){
        let newCarton = Array.from({length: 15}, (v, i) => Math.floor(Math.random() * 15 + 1));        
        while (newCarton.length) {
            this._data.carton.original.push(newCarton.splice(0,5));
        }; 
        let w = this._data.carton.original
        console.log(`%cYour Ticket\n%c${w.map(x => `|${x.join('|')}|`).join('\n')}`,s5,s3)
    },
    

    points(){
        let c = this._data.carton.copy;
        let r = this._data.randomNum;
        let flat = c.flat();
        
        c.map(arr => arr.map(num => num === r ? this._data.user.points += 2 : ''))

        if(this._data.trigger.oneLine && flat.length === 11){
            this._data.trigger.oneLine = false
            this._data.user.points += 5;
            
       };
       
        if(this._data.trigger.twoLines && flat.length === 7){
            this._data.trigger.twoLines = false;   
            this._data.user.points += 10;
                
        };

        if(this._data.trigger.threeLines && flat.length === 3 ){
            this._data.trigger.twoLines = false;
            this._data.user.points += 15;
        } 
      

    },

    checkIfMatch(){  
        let c = this._data.carton.copy;
        let r = this._data.randomNum;
        let p = this._data.user.points;
        let flat = c.flat();
        this.points();

        console.log(`%cBall number: ${this._data.randomNum}\n\n%c${c.map((arr, i) => `|${arr.map((num, j) => num === r ? c[i][j] = 'X' : num).join('|')}|`).join('\n')}`,s5,s3);
        if(this._data.user.points > p) console.log(`Points: +${this._data.user.points - p}  Total: ${this._data.user.points}`);
        if(this._data.user.points === p){
            this._data.user.points -= 1;
            console.log(`Points: ${this._data.user.points - p}  Total: ${this._data.user.points}`);
        };
        c.map((arr, i) => {arr.join('') === 'XXXXX'  ? c[i] = ['---LINE---'] : arr}) 

        if(flat.length === 3){
            this.points()
            print = console.log(`%c ---BINGO---\n%c🍀👏👏🍀\non round ${this._data.user.balls - 1}`,s4,s1)
            this._data.carton.original.length = 0;
            this._data.carton.copy.length = 0;
            this.addGamertoRanking(this._data.user.name, this._data.user.balls - 1, this._data.user.points);
            this.newGame();
           };

        this.newBall();  
    },


   newBall(){
       let con = confirm(`New Ball?`) 
            if(con){
              this.playGame();
            }else{
                return;
            }  
   },

   scoreTable(){
       this._data.score.forEach(prop => console.log(`%cName: ${prop.name}, Balls: ${prop.balls}, Points: ${prop.points}`,s5 ))
       let filter =  Object.values(this._data.score).filter(val=> val.points ).sort((a, b) => b.points - a.points).slice(0,1)
       filter.forEach(item => console.log(`%cThe Winner is: ${item.name}, with ${item.balls} balls and a total of ${item.points} points`,s3))
     
   },


   newGame(){
        let nw = prompt(`1----New Game?\n2----New Player?\n3----Score Table\n4----Exit Game`)
        if(nw){
            this.triggerStat(true)
            this._data.user.balls = 0
            this._data.user.points = 0
           if(nw === '1'){
                this.chooseTicket();
           }else if(nw === '2'){
                this.gameFlow();
           }else if(nw === '3'){
                this.scoreTable();
                this.newGame(); 
           }else if(nw === '4') 
           return false;
       }else if(!nw){
           this.newGame();
       }else{
           return false
       };
   },

   ready(){
       let b = confirm(`-----------RULES------------\nEach player starts with 100 points.\nCrossed Out number -----2 points.\nFirst line--------------5 points.\nSecond line-------------10 points.\nThird line--------------15 points.\nThe player with more points win.\n\nAre you Ready?`);
       if(b){
           this.chooseTicket();
       }else{
           return
       };
   },

   chooseTicket(){
        this.getNewCarton()
        this.copyObj()
        let c = prompt(`Are you happy with this Ticket?\n1--YES\n2--NO`)
        if(c === '1'){
            this._data.user.points === 0 ? this._data.user.points = 100 : this._data.user.points = 100
            this.playGame()
        }else if(c === '2'){
            this._data.carton.original.length = 0
            this.chooseTicket()
        }else{
            return;
        }
   },

   gameFlow(){
        this._data.carton.original.length = 0;
        this._data.carton.copy.length = 0;
        this.getUserName();
        this.ready();
    },

    playGame(){
        this.getRandomNumber();
        this.checkIfMatch();  
    },
    
};

bingo.gameFlow()