const prompt = require('prompt-sync')();

console.log('SESI/SENAI')
function Linha (){
    console.log('- * - * - *  -  * - * - * - * -');
}

Linha();
console.log('SESI/SENAI');
Linha();


function Cabecalho (){
    console.log('- * - * - *  -  * - * - * - * -');
    console.log('SESI/SENAI');
    }
    Cabecalho();

    function Cabecalho (){
Linha();
console.log('SESI/SENAI');
Linha();
}
Cabecalho();
        
function CabecalhoEscola (nomeEscola) {
    Linha()
    console.log(nomeEscola);
    Linha()
}
CabecalhoEscola('USP')
CabecalhoEscola('SESI')

function Soma (nr1, nr2) {
    let resultado = nr1 +nr2;
    console.log(resultado);
}

Soma(5,8)

//função com parâmetros e retorno 
function media (n1, n2) {
    let resultado = (n1 + n2) / 2;
    return resultado;
}

let valor = media (5,8);

