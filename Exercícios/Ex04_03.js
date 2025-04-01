const prompt = require('prompt-sync')();

let qtdePar = 0;
let qtdeImpar = 0
let somaPares = 0
let somaImpares = 0

while (true) {
    let valor = Number(prompt('Digite o número: '));

    if (valor == 0) {
        break;
    }
    if (valor % 2 == 0) {
        qtdePar++
        somaPares = somaPares + valor;
    } else {
        qtdeImpar++;
        somaImpares = somaImpares + valor
    }
}
console.log(`voce digitou ${qtdePar} n° pares, somados resultou em ${somaPares}`);
console.log(`voce digitou ${qtdeImpar} n° ímpares, somados resultou em ${somaImpares}`);

