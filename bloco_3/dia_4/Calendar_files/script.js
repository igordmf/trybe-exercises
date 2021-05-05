function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//1.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDecemberDays(arrayDays) {
  for (index = 0; index < arrayDays.length; index += 1) {
    let day = document.createElement('li');
    day.innerText = arrayDays[index];
    day.classList.add('day');
    if (arrayDays[index] === 24 || arrayDays[index] === 25 || arrayDays[index] === 31) {
      day.classList.add('holiday');
    }
    if (arrayDays[index] === 4 || arrayDays[index] === 11 || arrayDays[index] === 18 || arrayDays[index] === 25) {
      day.classList.add('friday');
    }
    document.getElementById('days').appendChild(day);
  }
}

createDecemberDays(dezDaysList);

//2.
function generateHolidaysBtn(string) {
  const button = document.createElement('button');
  button.innerText = string;
  button.setAttribute('id', 'btn-holiday');
  document.querySelector('.buttons-container').appendChild(button);
}

generateHolidaysBtn('Feriados');

//3.
const btnHoliday = document.getElementById('btn-holiday');

btnHoliday.addEventListener('click', changeHolidayColor);

function changeHolidayColor(event) {
  const holiday = document.getElementsByClassName('holiday');
  if (holiday[0].style.backgroundColor === 'white') {
    for (let index = 0; index < holiday.length; index += 1) {
      holiday[index].style.backgroundColor = 'transparent';
    }
  } else {
    for (let index = 0; index < holiday.length; index += 1) {
      holiday[index].style.backgroundColor = 'white';
    }
  }
}

//4.
function generateFridayBtn(string) {
  const button = document.createElement('button');
  button.innerText = string;
  button.setAttribute('id', 'btn-friday');
  document.querySelector('.buttons-container').appendChild(button);
}

generateFridayBtn('Sexta-feira');

//5.
const btnfriday = document.getElementById('btn-friday');

btnfriday.addEventListener('click', changeFridayText);

let dayNum = [];

function changeFridayText(event) {
  const friday = document.getElementsByClassName('friday');
  if (friday[0].innerText !== 'SEXTOU!') {
    for (let index = 0; index < friday.length; index += 1) {
      dayNum.push(friday[index].innerText);
      friday[index].innerText = 'SEXTOU!';
    }
  } else {
    for (let index = 0; index < friday.length; index += 1) {
      friday[index].innerText = dayNum[index];
    }
  }
}

//6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.

let days = document.getElementById('days');

days.addEventListener('mouseover', zoomOn);
days.addEventListener('mouseleave', zoomOut);

function zoomOn(event) {
  let day = event.target;
  day.style.fontSize = '30px';
}

function zoomOut(event) {
  let day = event.target;
  day.style.fontSize = '20px';
}