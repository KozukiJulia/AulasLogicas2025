const prompt = require('prompt-sync')();

function ParImpar(n1) {
    if (n1 % 2 == 0) {
        console.log('é par');
    } else {
        console.log('é impar ');
    }
}
ParImpar(2);
ParImpar(3)       