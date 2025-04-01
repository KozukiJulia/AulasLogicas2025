const prompt = require('prompt-sync')();
// Operadores relacionados
// == quer dizer igual, igualdade
//!= quer dizer diferente

let a = 2
let b = 3
console.log(a > b); //False
console.log(a == b); //false
console.log(a != b); //true
console.log(a >2); //false
console.log(a>= 2); //true

//if estrturura de condição muito ultilizada na programaçaõ
let tenhoingresso = true;
if(tenhoingresso == true){ // sea condição for verdadeira
    //entra nesse bloco de comando
    console.log('posso entrar no show')
}

let idade = Number(prompt( 'qual é a sua idade?'));
if (idade > 18) {
    console.log('maior de idade'); 
}

let tenhoIngresso = false;     
if(tenhoingresso == true){ // sea condição for verdadeira
    console.log('posso entrar no show')
} else {// se a primeira condição for false
    console.log('estou barrado na portaria');
}

if (idade > 18) {
    console.log('maior de idade'); 
} else {
    console.log('menor de idade');
    
}