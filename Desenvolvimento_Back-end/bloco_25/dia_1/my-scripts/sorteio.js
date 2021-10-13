readlineSync = require('readline-sync');

function game() {
  const randomNumber = Math.floor(Math.random() * (10 + 1))
  const number = readlineSync.questionInt("Qual número você acha que será sorteado entre 0 e 10? ");
  if(randomNumber === number) console.log("Parabéns, número correto!");
  if(randomNumber !== number) console.log(`Opa, não foi dessa vez. O número era ${ randomNumber }`);
  return 
}

game();

