const prompt = require('prompt-sync')();

console.log("========================================");
console.log("🤔    JOGO DA ADIVINHAÇÃO   🤔");
console.log("========================================");

let nrSecreto = Math.floor(Math.random() * 100) + 1;
let acertou = false;
let tentativas = 0;

while (acertou == false) {
    let chute = Number(prompt('digite um n° entre 1 e 100:'))
tentativas ++; // tentativas = tentativs +1;
    if (chute === nrSecreto) {
        console.log(`Parabens vc acertou em ${tentativas} tentativas!!! 👏✨`);
        acertou = true;
    } else if (chute > nrSecreto) {
        console.log(`Você chutou ${chute}, tente um numero 👇`);
    } else if (chute < nrSecreto) {
        console.log(`Você chutou ${chute}, tente um numer👆`);
    }
}
console.log(`fim`);


