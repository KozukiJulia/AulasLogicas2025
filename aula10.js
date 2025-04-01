//Estrutura de laço de repetição Wile
const prompt = require('prompt-sync')();
let resposta = 's';

while (resposta == 's'){
    console.log('voce etá dentro do bloco')
    resposta = prompt('deseja continuar ? S/N')
}
console.log('Fim')

let senhaSecreta = 'senai'
let senhaDigitada
while(senhaSecreta != senhaDigitada){
    console.log('descubra a senha secreta!');
    senhaDigitada = prompt('qual é a senha?')
}
console.log('fim');

// exemplo 3 - executando um numero detrminado de vezes
let contador = 1;
while (contador <= 5){
    console.log(`o contador esta no n° ${contador}`);
    contador ++; //contador = conatdor +1
}

//exemplo4
//posso deixar meu laço executando sem uma condição específica, apenas
//com while (true) e encerrar o loop com o comando break
let total = 0
let qtde = 0

while(true){
    let valor = Number(prompt('digite o valor do produto(0 para encerrar):'));

    if(valor == 0 ) {
        break;
    } else{
        total = valor + total;
        qtde ++;
    }
}

console.log(`voce comprou no total ${qtde}produtos`);
console.log(`valor total da compra R$ ${total.toFixed(2)} `);

