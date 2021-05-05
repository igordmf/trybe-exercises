const emplyee = (fullName) => { 
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${fullName}@trybe.com` };
}

const newEmployees = (funcao) => {
  const employees = {
    id1: funcao('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: funcao('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: funcao('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees(emplyee));