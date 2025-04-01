const prompt = require('prompt-sync')();

let filmes  = ['Moana','Barbie','Divertidamente', 'Rei leão',  'O poderoso chefão','Avatar','Titanic'];

console.log(filmes[0]);
console.log(filmes[4]);
filmes[6] = 'Avatar 2'
console.log(filmes);

filmes= [...filmes, 'Os 10 melhores filmes']
console.log(filmes);

filmes.splice(5,0,'enrolados')
console.log(filmes);

filmes.shift();
console.log(filmes);

filmes.pop();
console.log(filmes);

console.log(filmes.slice(0,2));
console.log(filmes .slice(-4,-6));
console.log(filmes.length);
filmes.reverse();
console.log(filmes);
