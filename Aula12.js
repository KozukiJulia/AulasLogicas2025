const prompt = require('prompt-sync')();
//variaveis composta / vetores / Arrays

// variavel simples cabe apenas 1 dado por vez
let fruta = 'Maçã';
fruta = 'Banana';

// Variavel composta,
let frutas = ['Maçã','Banana', 'Abacaxi','Uva'];

console.log(frutas);
console.log(frutas[1]);

//declarando uma lista vazia
let listaVazia = [];

//declarando de uma lista de numeros
let numeros = [1, 2, 8, 5, 9];

//declaração de uma lista de strings
let nomes = ['Ana', 'Joao' , 'Maria'];

// declaração de uma lista mista
let listaMista = [4, 'feijão', true, 7.55];

//Declaração de uma lista com outras listas
let listaDeVetores = [['coca-cola', 'hot-dog'],[5.00, 10.00]]
console.log(listaDeVetores[0][1]);

console.log(frutas);
//alterando o conteudo de um item da lista
frutas [3] = 'Melancia';
console.log(frutas);

//Inserindo um novo item na lista 
//frutas [4] = 'laranja' ;
frutas.push('Laranja')
frutas = [...frutas, 'laranja']; //utilizando o operador spread

//Inserindo um novo item na lista 
frutas.splice(2, 0, 'Morango')
console.log(frutas);
// 2 -posição
//0 - quantidade de itens a serem removidos

//excluindo itens da lista 
frutas.splice(3,1)
//  3 - posião
//  1 - quantidade de itens a serem removidos 
frutas.shift(); //remove o primeiro item da lista 
frutas.pop(); //remove o ultimo item da lista 

console.log(frutas);

frutas = ['Maça','Banana','Morango', 'Abacaxi', 'Melancia', 'Laranja', 'Uva']
console.log(frutas[4]); // posição especifica 
console.log(frutas.slice(0,4)); // Da posição 00 pegar 4 itens 
console.log(frutas.slice(1)); // Da posição 1 até o ultimo
console.log(frutas.slice(-1)); // nr de itens do fim pro inicio
console.log(frutas.length); // total de itens na lista 

frutas = ['Maça','Banana','Morango', 'Abacaxi', 'Melancia', 'Laranja', 'Uva']
frutas .sort() // ordenando lista em ordem alfabetica 
console.log(frutas);
    frutas .reverse() // ordenando lista em ordem decrescente 
    console.log(frutas );
    

