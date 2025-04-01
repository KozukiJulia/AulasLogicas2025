const prompt = require('prompt-sync')();


let n1 = Number(prompt('Qual é o 1° numero?'));
let n2 = Number(prompt('Qual é o 2° numero?'));
if ( n1 == n2) {
console.log('sao iguais');
} else {
    console.log('sao diferentes');
}
    