const prompt = require('prompt-sync')();

function FormatarData(dia,mes,ano) {
    let resultado = `${dia} / ${mes} / ${ano}`
    return resultado
}
let valor = FormatarData( '3', '5','2025')
console.log(valor);
