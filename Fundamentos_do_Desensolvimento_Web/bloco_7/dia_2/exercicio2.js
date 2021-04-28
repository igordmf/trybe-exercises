const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function addDayShift(lesson, turno, valor) {
  lesson.turno = valor;
}

addDayShift(lesson2, 'turno', 'manhã');

function listKeys(object) {
  for(keys in Object.keys(object)) {
    console.log(Object.keys(object)[keys]);
  }
}

listKeys(lesson3);

function showArrLength(object) {
  let arrObj = Object.keys(object);
  console.log(arrObj.length);
}

showArrLength(lesson3);

const allLessons = {};
console.log(allLessons);
Object.assign(allLessons, lesson1, lesson2, lesson3);
console.log(allLessons);