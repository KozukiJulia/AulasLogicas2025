const prompt = require('prompt-sync')();
//interação sobre nossos vetores (arrays / listas)

//vetor         0        1          2       3  
let frutas = ['maça', 'banana', 'abacaxi','uva']
//para iterar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length; x++) {
    console.log(`a fruta da posição ${x} é ${frutas[x]}`);   
}
console.log('fim');

//interando sobre uma lista usando o for of
let listaJogadores = ['Pele', 'Maradona','Messi','Ronaldo']
for (let jogador of listaJogadores){
    console.log(`o jogador é ${jogador}`);   
}

let listanumeros = [0, 1, 2, 3, 4,]
for (let numeros of listanumeros){
    console.log(`o numero é ${numeros}`);   
}

let soma = 0;
let listaNrs = [0, 1, 2, 3, 4,]
for (let nrs of listaNrs){
    console.log(`o numero é ${nrs}`);   
    soma = nrs + soma
}
console.log(soma );

// verificando se um element existe em um array
let vogal = ['a', 'e','i','o','u'];
let consoantes = ['b','c','d','f','g','h', 'j','k','l','m','n','p','q','r','s','t','v','w','y','z'];
let number = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let ParaVerificar = prompt('Digite uma letra ');
if (vogal.includes(ParaVerificar.toLowerCase())){
    console.log(`a letra ${ParaVerificar} é uma vogal`);
} else if (consoantes.includes(ParaVerificar.toLowerCase())){
    console.log(`a letra ${ParaVerificar} é uma consoante`);
}else if (number.includes(ParaVerificar)){
console.log(`${ParaVerificar} é um numero`);
}else {
    console.log(`${ParaVerificar} não é uma letra`);   
}

//obtendo a posição de um item em um array usando o for of e a função entries()
// posição           0        1          2       3
let listaFrutas = ['maça', 'banana', 'abacaxi','uva'];
for(const [pos,fruta] of listaFrutas.entries() ){
    console.log(` A fruta da posição ${pos} é ${fruta}`);
    
}

//separando uma string utilizando o split() 
let produtos = 'Celular, Notebook,TV,Tablet,Monitor'
let listaProdutos = produtos.split (',')
console.log(produtos);
console.log(listaProdutos);
 
//strings são lista (vetores / arrays) de caracteres
//            01234
let escola = 'senai' //[ ' s', 'e', 'n', 'a', 'i']
console.log(escola[0]);
//utilizando o for of exibir a apalavra da seguinte forma 
//s
   //e
      //n
         //a
            //i
for(const letra of escola) {
    console.log(letra);
}