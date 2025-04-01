const prompt = require('prompt-sync')();

let larguraMetros = Number (prompt ('Digite a larguraMetros:'));
let alturaMetros = Number (prompt ('Digite a alturaMetros:'));
let area = larguraMetros*alturaMetros;
let litros = area/2;
console.log(`para pintar ${area}m voce precisa de ${litros}litros de tinta `)
