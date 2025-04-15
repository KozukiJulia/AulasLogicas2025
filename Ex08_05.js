const prompt = require('prompt-sync')();

function tabuada (){
for(let i = 1; i <= 10; i++) {
    console.log(`a tabuada de ${numero} x ${i} =` + (numero * i));
}
}
let nr = prompt('qualé o numero?');
tabuada(nr)