
const prompt = require('prompt-sync')();

let velocidade = Number(prompt('Qual é a velocidade?'));
if ( velocidade >80) {
    let multa = (velocidade-80)* 7
console.log(`você sera multado em ${multa}`);
} else {
console.log('não foi multado ');
}
    