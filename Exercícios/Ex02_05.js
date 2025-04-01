const prompt = require('prompt-sync')();

let ano = Number(prompt('Qual é o ano de nascimento?'));
if ( ano >2006) {
console.log('é < de idade');
} else {
console.log('é > de idade ');
}
    