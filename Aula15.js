//escopo de variaveis
//variavel global pode ser acessadaem qualquer lugar
//variavel local so pode ser acessada dento do bloco
//utilizando variaveis local
function NomeEscola() {
   console.log(`valor dentro da função: ${escola}`);
}
    let escola = 'SENAI'
console.log(`valor fora da função: ${escola}`);
NomeEscola();
console.log(`valor após a função:${escola}`);

//utilizando variaveis global
var escola2 = 'SENAI'

function NomeEscola2() {
    var escola2 = 'SESI'
    console.log(`valor dentro da função: ${escola2}`);
 }
   
 console.log(`valor fora da função: ${escola2}`);
 NomeEscola2();
 console.log(`valor após a função:${escola2}`);
 console.log(  );
 
 //documentando funções usando o JSDOC
/**
 * 
 * @param {number} a - primeira numero
 * @param {*} b - segundo numero
 * @returns -soma dos dois numeros  
 */
 function soma (a, b) {
    return a + b;
 }
 soma(2,4);