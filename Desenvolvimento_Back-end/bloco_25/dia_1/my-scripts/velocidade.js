readlineSync = require('readline-sync');

const avgSpeed = () => {
  const distance = readlineSync.questionInt("Qual foi a distancia percorrida em metros? ");
  const time = readlineSync.questionInt("Qual foi a duracao da viagem em segundos? ");

  return (`A velocidade média foi de ${ distance / time } m/s`);
}

console.log(avgSpeed());