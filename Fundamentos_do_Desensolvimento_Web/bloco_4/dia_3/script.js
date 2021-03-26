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

let n = 11;
let stringDeAst = '*';

for (let i = 1; i <= ((n / 2) + 1); i += 1) {
  for(let j = 1; j <= ((n-1) / 2); j += 1) {
    if(j >= i) {
      stringDeAst = ' ' + stringDeAst + ' ';
    } else {
      stringDeAst = '*' + stringDeAst + '*';
    }
  }
  console.log(stringDeAst);
  stringDeAst = '*';
}

