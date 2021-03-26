// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);

// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);

// tasksList.push('Fazer exercícios da Trybe');
// tasksList.unshift('Acordar');

// tasksList.pop();

// console.log(tasksList);

// let indexOfTask = tasksList.indexOf('Reunião');
// console.log(indexOfTask);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let menuServices = menu[1];

// console.log(menuServices);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portfólio');

// console.log(indexOfPortfolio);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// menu.push('Contato');

// console.log(menu);

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1) {
//   console.log(groceryList[index]);
// }

// let numeros = [1,2,3,4,5];
// for(let numero of numeros) {
//   console.log(numero);
// }

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for (let name of names) {
//   console.log(name);
// }

//--- Exercicios ---
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//--- Exercicio 1 ---
// for (index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// }

//--- Exercicio 2 ---
// let soma = 0;
// for (index = 0; index < numbers.length; index += 1) {
//   soma = soma + numbers[index];
// }

// console.log(soma);

//--- Exercicio 3 ---
// let soma = 0;
// for (index = 0; index < numbers.length; index += 1) {
//   soma = soma + numbers[index];
// }
// let media = soma / numbers.length;

// console.log(media);

//--- Exercicio 4 ---
// let soma = 0;

// for (index = 0; index < numbers.length; index += 1) {
//   soma = soma + numbers[index];
// }

// let media = soma / numbers.length;

// switch (true) {
//   case (media > 20):
//     console.log('valor maior que 20');
//     break;
//   default:
//     console.log('valor menor ou igual a 20');
//     break;
// }

//--- Exercicio 5 ---

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let maiorNumero = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > maiorNumero) {
//     maiorNumero = numbers[index];
//   }
// }

// console.log(maiorNumero);

//--- Exercicio 6 ---
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 29];
// let odd = 0;
// for (index = 0; index < numbers.length; index +=1) {
//   if (numbers[index] % 2 !== 0) {
//     odd += 1;
//   }
// }

// console.log(odd);

//--- Exercicio 7 ---
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let menorNumero;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] < menorNumero) {
//     menorNumero = numbers[index];
//   }
// }

// console.log(menorNumero);

//--- Exercicio 8 ---
//Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
// let arrayDeNumeros = [];

// for (let index = 0; index < 25; index += 1) {
//   arrayDeNumeros.push(index+1);
  // console.log(arrayDeNumeros[index]);
// }

// console.log(arrayDeNumeros);

//--- Exercicio 9 ---
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// for (index = 0; index < arrayDeNumeros.length; index += 1) {
//   arrayDeNumeros[index] = arrayDeNumeros[index] / 2;
//   console.log(arrayDeNumeros[index]);
// }

//--- Bônus ---
let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

// for (let index = 0; index < array.length - 1; index += 1) {
//   for (let secondIndex = 0; secondIndex < array.length - index - 1; secondIndex += 1) {
//     if (array[index] > array[secondIndex]) {
//       let position = array[index];
//       array[index] = array[secondIndex];
//       array[secondIndex] = position;
//     }
//   }
// }

//--- Parte 1 ---

// let indexCount = 0;
// while (indexCount < array.length) {
//   for (let index = 0; index < array.length - indexCount; index += 1) {
//     if (index < (array.length - indexCount - 1) && array[index] > array[index + 1]) {
//       let position = array[index];
//       array[index] = array[index + 1];
//       array[index + 1] = position;
//     }
//   }
//   indexCount += 1;
// }

// console.log(array);

//--- Parte 2 ---

// let indexCount = 0;
// while (indexCount < array.length) {
//   for (let index = 0; index < array.length - indexCount; index += 1) {
//     if (index < (array.length - indexCount - 1) && array[index] < array[index + 1]) {
//       let position = array[index];
//       array[index] = array[index + 1];
//       array[index + 1] = position;
//     }
//   }
//   indexCount += 1;
// }

// console.log(array);

//--- Parte 3 ---
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
// 3. Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

// let novoArray = [];

let novoArray = numbers.map((number,index) => number * (numbers[index + 1] || 2));
// for (let index = 0; index < numbers.length; index += 1) {
//   if (index == numbers.length -1) {
//     novoArray.push(numbers[index] * 2);
//   } else {
//     novoArray.push(numbers[index] * numbers[index + 1]);
//   }
// }
console.log(novoArray);