const prompt = require('prompt-sync')();

//criando nossa primeira variavel
//uma variavel serve para armazenar uma informação/valor
// o memoria crie um espaço com o nome curso e receba o valor'desenvolvimento de sistemas'
var curso = 'desenvolvimento de sistemas';

//exibindo o conteudo da variavel
console.log('curso');//para imprimir uma variavel, não se coloca entre ' '
console.log(curso); //jeito correto de usar uma variavel
console.log('curso', curso);

//criando e atribuindo valores a uma variavel
var idade = 16; //inteira // integer
var temperatura = 24.5; //real //float
var nome = 'Julia'; //

console.log('ola ' + nome + 'você tem ' + idade + ' anos')
console.log('esta cursando ' + curso + 'hoje faz ' + temperatura + '°C');


//template 
//utilizo a crase ` ` para criar uma 
//para colocar variaveis dentro da , utilizo ${variavel}
console.log(`ola,${nome} voce tem ${idade} anos
           esta cursando ${curso} hoje faz ${temperatura}°C`);

//declarando uma variavel logica/booleano(true/false)
var podeDirigir = true;
var estaChovendo = false;

//Declarando uma variavel nula 
var escola;


// exercicio
//Nota1 valido
//nomeCompleto valido
//nome Competo invalido
//média invalido
//console invalido
// _salario valido
//9dade invalido
// Minha_Variavel valido
//var invalido
//valor$ invalido
//nome-completo invalido
//escola_ valido
//TELEFONE valido
//true invalido 

let cidade = 'Andradina'
var turma = '2°B'
const ano = 2025

console.log(turma);
turma = '3°B' // reatribuindo o valor de uma variavel
console.log(turma);
//ano = 2026;
// ano = 2026; //Não podemos reatribuir valor a uma constante 


let _nome = 'kozuki';
let _idade = 16;
let _peso = 51;
console.log(_nome, _idade, _peso);


// No prompt o computador espera o usuario digitar uma informação
//sempre quando recebemos uma informação de entrada ela vem em 
_nome = prompt('qual é o nome ?');  // 
_idade = prompt('qual é a idade ?'); //
_peso = prompt('qual é o peso ?');   // 
console.log(_nome, _idade, _peso);

console.log(typeof _nome, typeof _idade, typeof _peso);

// criem 2 variaveis num1 e num2 e recebam as informações pelo prompt
var num1 = prompt('digite o primeiro n°:');
var num2 = prompt('Digite o segundo n°:')
console.log(num1 + num2);

console.log(typeof num1); // 
num1 = Number(num1)  // convertendo a variavel do tipo  para number 
console.log(typeof num1); // number

//receber uma informação já convertendo seu tipo de dados
let nr1 = Number(prompt('digite o primeiro n°:')) //Number
let nr2 = Number(prompt('digite o segundo n°:')) //Number
console.log(nr1 + nr2);

//convertendo os dados de uma variavel
nr1 = "100.14";  // 
nr1 = Number("100.14"); //convertendo sting para number
nr1 = parseInt("100.14"); //convertendo  para integer
nr1 = parseFloat("100"); //convertendo  para float 100.00
nr1 = String(100.14); //convertendo um number para 

// exercicios variaveis 
// exercicio 1
var _nomealuno = "Julia";  // 
var _altura = 1.50
var _escola = "sesi"
var _anoatual = 2025
console.log(_nomealuno, _altura, _peso, _anoatual);

//exercicio 2
let _nomeprofessor = "Douglas"
let _materia = "computação"
let _anoingresso = 2023
console.log(_nomeprofessor, _materia, _anoingresso);

//exercicio 3
_nomealuno = prompt('qual é o nome ?');  // 
_altura = parseFloat(prompt('qual é a altura ?')); //float
_escola= prompt('qual é a escola ?');   // 
_anoatual = parseInt (prompt('qual é o ano atual?')) // Int
_nomeprofessor = prompt('qual é o nome do professor?') // 
_materia = prompt('qual é a materiacls?') // 
_anoingresso =parseInt (prompt('qual é o ano ingressado?') )// Itr
console.log(_nomealuno, _altura, _escola, _anoatual, _nomeprofessor, _materia, _anoingresso);



