// estrutura de laço de repetição for
const prompt = require('prompt-sync')();

//inicialização da variavel ; condição do for; incremento da variavel
for (let contador = 1; contador <= 5; contador ++ ) {
    console.log(contador );
}

//neste for iniamos a partir do numero 5, até o n° 50
//incrementando de 3 em 3 no contador 
for(let contador = 5; contador<=50; contador+= 3 ) {
    console.log(`o contador é ${contador}`);
}

//utilizando o break para parar o for
for(let contador = 1; contador<=500; contador++ ) {
    console.log(contador);
    if(contador == 50){
        break;
    }
}


    // tabuada com o for
    let nr = 6;
    for(let contador = 1; contador <= 10; contador++){
        console.log(`${nr} x ${contador} = ${contador} = ${nr * contador} `);
    }


console.log('entregando os notebooks');
for(let nr = 1; nr<= 32; nr++) {
    let nome = prompt(`Quem é o n° ${nr}: `)
    let presente = prompt (`O (A) ${nome} esta presente (S ou N)?`)

    if(presente == 'S'){
        console.log(`pegar o notebook ${nr}`);
        console.log(`levar o notebook até o (a) ${nome}`);
    }else{
console.log(`não pegar o notebook ${nr}`);
    }
        
    }

    