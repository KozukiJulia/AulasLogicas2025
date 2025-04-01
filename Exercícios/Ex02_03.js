const prompt = require('prompt-sync')();

let n1 = Number(prompt('Qual é o numero intiro?'));
if ( n1 % 2 == 0) {
console.log('é par');
} else {
console.log('é impar ');
}
    