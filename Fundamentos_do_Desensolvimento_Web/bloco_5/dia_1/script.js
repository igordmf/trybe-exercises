document.getElementById('header-container').style.backgroundColor = '#2fc18c';

document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = '#ff9966';

document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = '#ffe066';

for (let index = 0; index < document.querySelectorAll('.emergency-tasks h3').length; index += 1) {
  document.querySelectorAll('.emergency-tasks h3')[index].style.backgroundColor = '#cc00ff';
}

for (let index = 0; index < document.querySelectorAll('.no-emergency-tasks h3').length; index += 1) {
  document.querySelectorAll('.no-emergency-tasks h3')[index].style.backgroundColor = '#000';
}

document.getElementById('footer-container').style.backgroundColor = '#0d260d';