const prompt = require('prompt-sync')();

//Lista de exercicios 
let n1 = (prompt('digite um numero de 1 ao 7'))
switch (n1) {
    case '1':
        console.log('domingo');
        break;
    case '2':
        console.log('segunda');
        break;
    case '3':
        console.log('terça');
        break
    case '4':
        console.log('quarta');
        break;
    case '5':
        console.log('quinta');
        break;
    case '6':
        console.log('sexta');
        break;
    case '7':
        console.log('sabado');
        break;
    default:
        console.log(' digite um numero de 1 a 7');
}