const prompt = require('prompt-sync')();

let metros = Number(prompt('Digite um número em metros: '));
let centimetros = (metros * 100);
let milimetros = (metros * 1000);
let km = (metros / 1000);
console.log(`${metros} para centimetros é ${centimetros} para milimetros é ${milimetros} para km é ${km}`);
