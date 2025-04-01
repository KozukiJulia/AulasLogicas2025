const prompt = require('prompt-sync')();
//Operações com variaveis 
let nr1 = 5;
let nr2 = 7;
let soma = nr1+nr2;
console.log(`a soma entre ${nr1} e ${nr2} é ${soma}`);

let subtracao = nr1-nr2;
console.log( `a subtracao entre ${nr1} e ${nr2} é ${subtracao}`);

let multiplicacao= nr1*nr2;
console.log(`a multiplicacao entre ${nr1} e ${nr2} é ${multiplicacao}`);

let divisao = nr1/nr2;
console.log(`a divisao entre ${nr1} e ${nr2} é ${divisao}`);

let exponenciacao = nr1**nr2;
console.log(`a exponenciacao entre ${nr1} e ${nr2} é ${exponenciacao}`);

let valor = number(prompt('quql é o valor do celular?'))
let desconto = Number (prompt('qual é o desconto em %'))
valor = valor - (valor * desconto / 100)
console.log(`promoçao celular com R$ ${desconto} de desconto, por apenas R${valor}`);

// reatribuição de valor da variável
var numero = 4 / 2
numero= numero ** 2
numero = numero * (50 - 20)
console.log(' o valor é:', numero);
console.log(`o valor é: ${numero}`);

// calcule o dobro e a metade de um numero
let numero = Number(prompt('qual é o numero'))
let dobro= numero * 2;
let metade = numero / 2;
console.log(`o dobro do numero é ${dobro} e a metade é ${metade}`);

let horastrabalhados = 8
let diastrabalhados = 15
let projeto = horastrabalhados * diastrabalhados
let valorhora = 100
let valortotaldoprojeto = projeto * valorhora
console.log(valortotaldoprojeto);

