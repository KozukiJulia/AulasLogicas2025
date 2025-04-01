const prompt = require('prompt-sync')();

let preco = Number (prompt ('Digite o preço do produtos:'));
preco = preco - (5/100 * preco);
console.log(`o novo preço é ${novopreco}`);