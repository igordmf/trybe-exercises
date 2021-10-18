const fs = require('fs').promises;

function main(primeiro, segundo, terceiro) {
  const promise = new Promise((resolve, reject) => {
    if(typeof primeiro !== "number" || typeof segundo !== "number"  || typeof terceiro !== "number" ) reject(new Error('Informe apenas números'));
    
    const result = (primeiro + segundo) * terceiro;
    resolve(result);
  })

  return promise
}

const num1 = Math.floor(Math.random() * 100 + 1);
const num2 = Math.floor(Math.random() * 100 + 1);
const num3 = Math.floor(Math.random() * 100 + 1);


main(num1, num2, num3)
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message));

async function asyncMain(num1, num2, num3) {
  const result = await main(num1, num2, num3);
  console.log(result);
}

asyncMain(num1, num2, num3);