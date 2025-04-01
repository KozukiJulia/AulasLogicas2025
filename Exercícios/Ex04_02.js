const prompt = require('prompt-sync')();

let contador = 1;
while (contador <= 20){
    console.log(`o contador esta no n° ${contador}`);
    contador ++;
    if (contador %2 == 0){
        console.log(`O numero ${contador} é par`);
    }
}