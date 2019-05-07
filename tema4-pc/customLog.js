class CustomLogging {
    constructor(color) {
        this.style = {
            color: color
        };
    }
    setStyle({color}){
        if(color !== undefined) this.style.color = color;
    }
    log( body = "") {
        console.log(
          `%c${body}`,
          `font-size: 15px; color: ${this.style.color};`
        );
    }
}

const right = new CustomLogging();
const wrong = new CustomLogging();
const pass = new CustomLogging();
right.setStyle({color: '#08c938'})
wrong.setStyle({color: '#ef042f'})
pass.setStyle({color: '#049ae5'})
//right.log('a')
//wrong.log('b');
//pass.log('c')



console.log('')

