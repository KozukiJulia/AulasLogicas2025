const prompt = require('prompt-sync')();

let idadeM= 0
let idadeF= 0
let M = 0
let F = 0
for(let i= 1; i<=10; i++){
    let idade = Number(prompt('qual sua idade '))
    let Genero = (prompt('qual sua genero '))

    if(Genero== M){
        idadeM += 1
    }
    if(Genero== M){
        idadeM += 1
    }
}
console.log(`a idade media de homens é: ${idadeM/M}
    a idade media de mulheres é: ${ idadeF/F}
    e a media do grupo é: ${ (idadeF + idadeM)/(M+F)}
   
    `)

