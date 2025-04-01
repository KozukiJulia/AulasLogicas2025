// Importando biblioteca para receber informação do usuario
const prompt = require('prompt-sync')();
//Declarando variavel sem dados ( undefined)
let nota;
// Declarando variavel com informações
let nome = "Carlos";

//Reatribuindo um valor a variavel nome
nome = "Roberto";
nota = 8.5;


// Entrada de dados em nosso programa
let  sobrenome = prompt('digite seu sobrenome: ');
let nota1 = Number(prompt('digite a nota da 1° prova'));
let nota2 = Number(prompt('digite a nota da 2° prova'));

//Processamento dos dados 
let media = (nota1 + nota2) / 2;
let nomeCompleto = nome + ' ' + sobrenome;
let nomeCompleto2 = ` ${nome} ${ sobrenome}`;
let idade = prompt('digite a sua idade:');
let idadeNumero = parseInt(idade);

// saida dos dados
console.log('---Relatorio final---');
console.log(`nomeCompleto é: ${nomeCompleto} \n sua idade ${idade}`);
console.log('nomeCompleto é: '+ nomeCompleto + '\n sua idade' + idade);
console.log(`suamédia é: ${media}`);

let n = 0; //0
n = n + 1; //1
n = n+ 1 ; //2
n = n + 1; //3
n += 1;    //4
n++;       //5
n += 3;    //8
n--        //7
n = n - 1; //6
n -=2;     //4

//
let horasPorDia = Number(prompt('Quantas horas trabalhou por dia?'));
let diasTrabalhados = Number(prompt('Quantos dias trabalhou?'));
let valorHora = Number(prompt('Qual é o valor da hora?'));
let totalHoras = diasTrabalhados * horasPorDia;
let custoTotal = totalHoras * valorHora;
console.log(`O custo total é de R$ ${custoTotal}`);



