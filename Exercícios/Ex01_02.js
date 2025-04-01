const prompt = require('prompt-sync')();
//Exercicio 2 

let Inteiro = Number(prompt('Digite um número inteiro: '));
let sucessor =  (Inteiro + 1);
let antecessor =  (Inteiro - 1);
console.log(` o número é ${Inteiro} seu sucessor é ${sucessor} seu antecessor é ${antecessor}`)
