readlineSync = require('readline-sync');

function imcCase(imc) {
  if(imc < 18.5) return "Abaixo do peso (magreza)"
  if(imc >= 18.5 && imc < 25 ) return "Peso normal"
  if(imc >= 25 && imc < 30 ) return "Acima do peso (sobrepeso)"
  if(imc >= 30 && imc < 35 ) return "Obesidade grau I"
  if(imc >= 35 && imc < 40 ) return "Obesidade grau II"
  if(imc >= 40) return "Obesidade graus III e IV"
}

const calculaImc = () => {
  console.log()
  const weight = readlineSync.questionFloat('Qual seu peso em kilogramas? ');
  const height = readlineSync.questionFloat('Qual sua altura em metros? ');
  const imc = weight / (height * height)
  const situacao = imcCase(imc);
  return (`Seu IMC é: ${ imc }. Sua situação é: ${ situacao }`);
}

module.exports = calculaImc;