const createArraySquare = (number) => {
  const array = [];
  for (let index = 0; index < number; index += 1) {
    array.push(Math.pow(Math.floor(Math.random() * 51), 2));
  }
  // console.log(array);
  return array;
}

const arrayDiv23510 = (sum) => {
  const arrayDiv = [];
  arrayDiv.push(sum / 2);
  arrayDiv.push(sum / 3);
  arrayDiv.push(sum / 5);
  arrayDiv.push(sum / 10);
  // console.log(arrayDiv);
  return arrayDiv;
}

const promise = new Promise((resolve, reject) => {
  const array = createArraySquare(10);
  console.log(`Os 10 números aleatórios são: ${array}.`)
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  console.log(`A soma é: ${sum}.`);
  if (sum < 8000) {
    return resolve(sum);
  }
  reject(sum);
})
.then(sum => {
  const arr = arrayDiv23510(sum);
  console.log(`O array de divisão é: ${arr}.`);
  return arr;
})
.then(arr => arr.reduce((acc,curr) => acc + curr, 0))
.then(reduce => console.log(`A soma do array é: ${reduce}.`))
.then(() => console.log('Promise resolvida!'))
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
