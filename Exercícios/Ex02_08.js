const prompt = require('prompt-sync')();

let venda = Number(prompt('Quanto vendeu no mes?'));
if ( venda >5000) {
    let maior = venda * (5/100);
console.log(`A comissão é de ${maior}`);
} else { let menor = venda * (3/100);
console.log(`A comissão é de ${menor}`);
}
    

