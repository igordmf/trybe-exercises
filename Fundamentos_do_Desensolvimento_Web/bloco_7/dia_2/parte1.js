const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

function studentSkills(student) {
  let keys = Object.keys(student);
  console.log(keys);
  for(index in keys) {
      console.log(`${keys[index]}, Nível: ${student[keys[index]]}`);
  }
}

studentSkills(student1);

studentSkills(student2);