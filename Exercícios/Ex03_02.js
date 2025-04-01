const prompt = require('prompt-sync')();



let ano = (prompt('digite o ano atual '))
let nasc = (prompt('digite o ano de nascimento'))
let idade = ano - nasc

if (idade <= 10) {
    console.log(' criança ');
} else if (idade > 18 && idade <= 59) {
    console.log('adulto');
} else if (idade > 11 && idade <= 17) {
    console.log('adolescente');
} else if (idade >= 60) {
    console.log('idoso');
    
}