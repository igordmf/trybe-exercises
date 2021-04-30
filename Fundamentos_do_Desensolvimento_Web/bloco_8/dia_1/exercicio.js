const objeto = (nomeCompleto) => { return {
  nomeCompleto: nomeCompleto,
  email: `${nomeCompleto}@trybe.com`,
}}

const newEmployees = (funcao) => {
  const employees = {
    id1: funcao('Pedro_Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: funcao('Luiza_Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: funcao('Carla_Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(objeto));