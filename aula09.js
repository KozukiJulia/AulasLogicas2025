//estruturas condicionais aninhadas
// Switch case
const prompt = require('prompt-sync')();

let valorCompra = 120;
let clienteVIP = true;

if (valorCompra >= 100) {
    if ( clienteVIP == true){
    console.log(`Voce ganhou R$ ${valorCompra * 10/ 100}`);
    } else{
    let desconto = valorCompra * 5 / 100
    console.log(`Voce ganhou R$ ${desconto} de desconto`);
    
    }
} else {
    let restante = valorCompra - 100;
    console.log(` Compre mais R$ ${restante} e ganhe desconto`);
}

let idade = Number(prompt('digite a sua idade'))
if (idade<15) {
    console.log(' voce nao pode votar');
} else if (idade>18 && idade <70) {
    console.log('seu voto é obrigatorio');
    }else if (idade > 16 || idade < 18|| idade >70){
console.log('voto facultativo');
    }


    //switch case é uma alternativa ao if else
    let n1 = Number(prompt('digite um n°: '))
    let n2 = Number (prompt('digite outro n°:'))
    let op = prompt('digite o operador (+ - / * **):');
    switch (op){
        case '+':
     console.log(n1 + n2);
  break;
 case '-':
      console.log(n1-n2);
    break;
    case'*':
      console.log(n1*n2);
    break
    case'**':
   console.log(n1**n2);
    break;
    }
