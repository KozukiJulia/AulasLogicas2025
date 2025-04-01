const prompt = require('prompt-sync')();

let n1 = (prompt('digite o nome do mes : '))

switch (n1){
    case '1':
 console.log('janeiro');
break;
case '2':
  console.log('fevereiro');
break;
case'3':
  console.log('março');
  break
case'4':
console.log('abril');
break;
case'5':
console.log('maio');
break;
case'6':
console.log('junho');
break;
break
case'7':
console.log('julho');
break;
break
case'8':
console.log('agosto');
break;
break
case'9':
console.log('setembro');
break;
break
case'10':
console.log('outubro');
break;
break
case'11':
console.log('novembro');
break;
break
case'12':
console.log('dezembro');
break;
default:
    console.log(' digite um numero do 1 ao 12');
}
