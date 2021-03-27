//--- Exercicio 1 ---

// let n = 2;
// let stringDeAst = '';

// for (let i = 1; i <= n; i += 1) {
//   for (let j = 1; j <= n; j += 1) {
//     stringDeAst = stringDeAst + '*';
//   }
//   console.log(stringDeAst);
//   stringDeAst = '';
// }

//--- Exercicio 2 ---

// let n = 7;
// let stringDeAst = '';

// for (let i = 1; i <= n; i += 1) {
//   stringDeAst = stringDeAst + '*';
//   console.log(stringDeAst);
// }

//--- Exercicio 3 ---
// let n = 7;
// let stringDeAst = '*';

// for (let i = 0; i < n; i += 1) {
//   for(let j = 1; j < n; j += 1){
//     if (j <= i) {
//       stringDeAst = '*' + stringDeAst;
//     } else {
//       stringDeAst = ' ' + stringDeAst;
//     }
//   }
//   console.log(stringDeAst);
//   stringDeAst = '*';
// }

//--- Exercicio 4 ---

// let n = 11;
// let stringDeAst = '*';

// for (let i = 1; i <= ((n + 1) / 2) + 1); i += 1) {
//   for(let j = 1; j <= ((n-1) / 2); j += 1) {
//     if(j >= i) {
//       stringDeAst = ' ' + stringDeAst + ' ';
//     } else {
//       stringDeAst = '*' + stringDeAst + '*';
//     }
//   }
//   console.log(stringDeAst);
//   stringDeAst = '*';
// }

//--- Exercicio 5 ---
// let n = 11;
// let stringDeAst = '*';

// for (let k = 0; k < n; k += 1) {
//   stringDeAst = ' ' + stringDeAst + ' ';
// }
// console.log(stringDeAst);


// for (let i = 1; i <= ((n - 1) / 2); i += 1) {
//   for(let j = 1; j <= ((n-1) / 2); j += 1) {
//     if(j >= i) {
//       stringDeAst = '*' + ' ' + stringDeAst;
//     }
//   }
//   console.log(stringDeAst);
//   stringDeAst = '*';
// }
// stringDeAst = "";
// for (let k = 0; k < n; k += 1) {
//   stringDeAst = stringDeAst + '*';
// }
// console.log(stringDeAst);

// n = 7
//    *
//   * *
//  *   *
// *******

//--- Exercicio 6 ---

let ePrimo = 17781;
let divisores = [1];

for (divisor = 2; divisor < ePrimo; divisor += 1) {
  if (ePrimo % divisor === 0) {
    divisores.push(divisor);
  }
}

divisores.push(ePrimo);

if (divisores.length === 0) {
  console.log('O numero ' + ePrimo + ' é um número primo.');
} else {
  console.log('O numero ' + ePrimo + ' não é um número primo.');
}

console.log('Seus divisores são: ' + divisores);