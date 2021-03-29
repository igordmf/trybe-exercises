// --- Parte 1 ---

// let player = {
//   name: 'Marta',
//   lastName: 'Silva',
//   age: 34,
//   medals: {
//     golde: 2,
//     silver: 3
//   }
// }

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');

// console.log('A jogadora possui ' + player.medals.golde + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// --- Parte 2 ---

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//   type: 'Fiat',
//   model: '500',
//   color: 'white',
// };

// for (let index in car) {
//   console.log(index, car[index]);
// }

// let names = {
//   person1: 'João',
//   person2: 'Maria',
//   person3: 'Jorge' 
// } 

// for (let index in names) {
//   console.log('Olá ' + names[index]);
// }

// 'modelo: A3 Sedan, marca: Audi, ano:2020.'

let carro = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
}

let text = '';

for (let key in carro) {
  if (key == 'year') {
    text += key + ': ' + carro[key] + '.';
    console.log(text);
  } else {
    text += key + ': ' + carro[key] + ', ';
  }
}


// --- Parte 3 ---
