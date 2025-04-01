const prompt = require('prompt-sync')();

let reais = Number(prompt('Quanto dinheiro você tem na carteira? '));
let dolares = (reais / 5.79);
console.log(` voce tem R$ ${reais} convertendo tem $${dolares.toFixed(2)}`);