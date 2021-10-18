const fs = require('fs').promises;

const file = 'simpsons.json';

/* function readAllData(file) {
  fs.readFile(file, 'utf8')
    .then((data) => {
      const array = JSON.parse(data);
      array.forEach(({ id, name }) => console.log(`${id} - ${name}`));
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}

readAllData(file); */

/* function readCharacterID(id) {
  fs.readFile(file, 'utf8')
    .then((data) => {
      const array = JSON.parse(data);
      const character = array.filter((char) => char.id === id);
      if(!character.length) {
        console.log('id não encontrado');
      }
      else {
        console.log(character[0]);
      }
    })
    .catch((err) => console.error('id não encontrado'));
}

readCharacterID('1'); */

/* function removeCharacter(file) {
  fs.readFile(file, 'utf8')
    .then((data) => {
      const array = JSON.parse(data);
      const newCharacters = JSON.stringify(array.filter((char) => char.id !== '10' && char.id !== '6'), null, '\t')
      return newCharacters
    })
    .then((newCharacters) => {
      fs.writeFile(file, newCharacters)
    })
    .then(() => {
      console.log('Arquivo escrito com sucesso!');
    })
    .catch((err) => console.error(err));
}

removeCharacter(file) */

/* function getSimpsonFamily(file) {
  fs.readFile(file, 'utf8')
    .then((data) => {
      const array = JSON.parse(data);
      const simpsonFamily = JSON.stringify(array.filter((char) => char.id >= '1' && char.id <= '4'), null, '\t')
      return simpsonFamily
    })
    .then((simpsonFamily) => {
      fs.writeFile('simpsonFamily.json', simpsonFamily)
    })
    .then(() => {
      console.log('Arquivo escrito com sucesso!');
    })
    .catch((err) => console.error(err));
}

getSimpsonFamily(file) */

const simpsonFamily = 'simpsonFamily.json';

function addCharByName(name) {
  fs.readFile(file, 'utf8')
    .then((data) => {
      const array = JSON.parse(data);
      const character = array.filter((char) => char.name === name);
      return character[0];
    })
    .then((character) => {
      console.log(character);
      fs.readFile(simpsonFamily, 'utf8')
        .then((data) => {
          return JSON.parse(data).push(character);
        })
        .then((newArray) => {
          fs.writeFile('simpsonFamily3.json', newArray)
        })
        .then(() => console.log('Arquivo escrito com sucesso!'))
        .catch((err) => console.error(err));
    })
    .catch((err) => console.error(err));
}

addCharByName('Nelson Muntz');