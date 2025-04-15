const prompt = require('prompt-sync')();

function operaçao(nr1, nr2 ,op){
    if (op === '+') {
        console.log(` ${nr1} + ${nr2} é ` + (nr1 + nr2));
    }else if(op === '-'){
    console.log(` ${nr1} - ${nr2} é ` + (nr1-nr2));
}else if(op === '*'){
    console.log(`${nr1} * ${nr2} é ` + (nr1*nr2));
}else if(op === '/'){
    console.log(`${nr1} / ${nr2} é ` + (nr1/nr2));
}else if(op === '**'){
    console.log(` ${nr1} ** ${nr2} é ` + (nr1**nr2));
}
}

let num1 = prompt('digite um numero');
let num2 = prompt('digite um numero');
let operador = prompt('informe a operação - sugestão + - * /  ** ');
operaçao(num1, num2, operador)