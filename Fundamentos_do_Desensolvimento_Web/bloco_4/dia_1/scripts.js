// ***-PARTE 1-***
// console.log('Parte 1 \n');
//let name = 'Igor';
// const birthCity = 'Recife';
// let birthYear = 1993;

// birthYear = 2020;
// // birthCity = 'Boa Viagem';

// console.log(name);
// console.log(birthCity);
// console.log(birthYear);

// console.log('\n');

// ***-PARTE 2-***
// console.log('Parte 2 \n');
// let patientId = '50';
// let isEnrolled = true;
// const patientInfo = {
//   firstName: 'Ana',
//   lastName: 'Santos',
// };
// const patientEmail = 'ana@email.com';

// console.log(typeof patientId);
// console.log(typeof isEnrolled);
// console.log(typeof patientInfo);
// console.log(typeof patientEmail);
// console.log(typeof patientAge);

// ***-PARTE 3-***
// let base = 5;
// let altura = 8;
// let area = base * altura;
// let perimetro = 2 * base + 2 * altura;
// console.log('A área é ' + area + 'm.');
// console.log('O perímetro é de ' + perimetro + 'm.');

// ***-PARTE 4-***
// let nota = 70;

// if (nota >= 80) {
//   console.log('Parabéns, você foi aprovada(o)!');
// } else if (nota >= 60 && nota < 80) {
//   console.log('Você está na nossa lista de espera');
// } else if (nota < 60) {
//   console.log('Você foi reprovada(o)');
// }

// ***-PARTE 5-***
// let estado; //= prompt('Digite um estado: \n\n aprovada \n lista \n reprovada');

// estado = 'aprovada';

// switch (estado) {
//   case 'aprovada':
//     console.log('Parabéns, você foi aprovada(o)!');
//     break;

//   case 'lista':
//     console.log('Você está na nossa lista de espera');
//     break;

//   case 'reprovada':
//     console.log('Você foi reprovada(o)');
//     break;

//   default:
//     console.log('não se aplica');
//     break;
//   }

// // ***-Exercicio 1-***
// //Adicao
// let a = 8;
// let b = 4;
// let soma = a + b;
// console.log('O resultado da soma é ' + soma + '.')

// // ***-Exercicio 1-***
// //Subtracao
// let c = 8;
// let d = 4;
// let subtracao = c - d;
// console.log('O resultado da subtracao é ' + subtracao + '.');

// // ***-Exercicio 1-***
// //Multiplicacao
// let e = 8;
// let f = 4;
// let multiplicacao = e * f;
// console.log('O resultado da multiplicacao é ' + multiplicacao + '.');

// // ***-Exercicio 1-***
// //Divisao
// let g = 8;
// let h = 4;
// let divisao = g / h;
// console.log('O resultado da divisao é ' + divisao + '.');

// // ***-Exercicio 1-***
// //Modulo
// let i = 8;
// let j = 4;
// let modulo = i % j;
// console.log('O módulo da divisao é ' + modulo + '.');

// ***-Exercicio 2-***
// let num1 = 7;
// let num2 = 7;

// if (num1 > num2) {
//   console.log('O maior número é o ' + num1);
// } else if (num1 < num2) {
//   console.log('O maior número é o ' + num2);
// } else if (num1 == num2) {
//   console.log('O dois número são iguais');
// } else {
//   console.log('Não é possível verificar!');
// }

// ***-Exercicio 3-***
// let num1 = 3214;
// let num2 = 69;
// let num3 = 53456;

// if (num1 > num2 && num1 > num3) {
//   console.log('O maior número é o ' + num1);
// } else if (num1 < num2 && num3 < num2) {
//   console.log('O maior número é o ' + num2);
// } else if (num3 > num1 && num3 > num2) {
//   console.log('O maior número é o ' + num3);
// } else if (num1 == num2 && num1 == num3) {
//   console.log('Os números são iguais!');
// } else {
//   console.log('Não é possível verificar!');
// }

// ***-Exercicio 4-***
// let valor = 0;

// switch (true) {
//   case (valor > 0):
//     console.log('O valor é positivo.');
//     break;
//   case (valor < 0):
//     console.log('O valor é negativo.');
//     break;
//   default:
//     console.log('zero');
//     break;
// }

// ***-Exercicio 5-***
// let angulo1 = 61;
// let angulo2 = 60;
// let angulo3 = 59;
// let somaAngulos = angulo1 + angulo2 + angulo3;

// switch (true) {
//   case (angulo1 < 0 || angulo2 < 0 || angulo3 < 0 ):
//     console.log('Erro');
//     break;
//   case (somaAngulos == 180):
//     console.log(true);
//     break;
//   case (somaAngulos != 180):
//     console.log(false);
//     break;
// }

// ***-Exercicio 6-***
// let pecaXadrez = prompt('Digite uma peça de Xadrez');
// let pecaXadrez = 'REI'
// pecaXadrez = pecaXadrez.toLowerCase();

// function movimentos(pecaXadrez) {
//   switch (pecaXadrez) {
//     case 'rei':
//       console.log('O rei se movimenta para frente, trás e lados, podendo andar apenas uma casa.');
//       return 'O rei se movimenta para frente, trás e lados, podendo andar apenas uma casa.';
//       break;
//     case 'dama':
//       console.log('A dama se movimenta para frente, trás, lados e diagonal, podendo andar várias casas.');
//       return 'A dama se movimenta para frente, trás, lados e diagonal, podendo andar várias casas.';
//       break;
//     case 'cavalo':
//       console.log('O cavalo se movimenta em L.');
//       return 'O cavalo se movimenta em L.';
//       break;
//     case 'bispo':
//       console.log('O bispo se movimenta nas diagonais, podendo andar várias casas.');
//       return 'O bispo se movimenta nas diagonais, podendo andar várias casas.';
//       break;
//     case 'torre':
//       console.log('A torre se movimenta para frente, trás e lados, podendo andar várias casas.');
//       return 'A torre se movimenta para frente, trás e lados, podendo andar várias casas.';
//       break;
//     case 'peao':
//       console.log('O peao se movimenta para frente, trás e lados, podendo andar apenas uma casa.');
//       return 'O peao se movimenta para frente, trás e lados, podendo andar apenas uma casa.';
//       break;
//     default:
//       console.log('Essa peça não existe!');
//       return 'Essa peça não existe!';
//       break;
//   }
// }

// document.getElementById("demo").innerHTML = pecaXadrez + ': ' + movimentos(pecaXadrez);

// ***-Exercicio 7-***
// let nota = 70;
let nota = prompt('Digite sua nota entre 0 e 100.\n');

function conceito(nota) {
  switch (true) {
    case (nota <= 100 && nota >= 90):
      console.log('Sua nota tem conceito A. Parabéns!!');
      return 'Sua nota tem conceito A. Parabéns!!';
      break;
    case (nota < 90 && nota >= 80):
      console.log('Sua nota tem conceito B. Muito bem!!');
      return 'Sua nota tem conceito B. Muito bem!!';
      break;
    case (nota < 80 && nota >= 70):
      console.log('Sua nota tem conceito C. Aprovado!!');
      return 'Sua nota tem conceito C. Aprovado!!';
      break;
    case (nota < 70 && nota >= 60):
      console.log('Sua nota tem conceito D. Estude mais um pouco!!');
      return 'Sua nota tem conceito D. Estude mais um pouco!!';
      break;
    case (nota < 60 && nota >= 50):
      console.log('Sua nota tem conceito E. Parabéns!!');
      return 'Sua nota tem conceito E. Parabéns!!';
      break;
    case (nota < 50):
      console.log('Sua nota tem conceito F. Reprovado!!');
      return 'Sua nota tem conceito F. Reprovado!!';
      break;
    default:
      console.log('Nota inválida!');
      return 'Nota inválida!';
      break;
  }
}

document.getElementById("demo").innerHTML = nota + ': ' + conceito(nota);

// ***-Exercicio 8-***

// ***-Exercicio 9-***

// ***-Exercicio 10-***

// ***-Exercicio 11-***