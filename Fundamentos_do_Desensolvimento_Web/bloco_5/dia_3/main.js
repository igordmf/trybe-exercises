const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');


//2.
divUm.addEventListener('mouseover', addTech);
divDois.addEventListener('mouseover', addTech);
divTres.addEventListener('mouseover', addTech);
input.addEventListener('keydown', changeText);
myWebpage.addEventListener('dblclick', redirectToPage);
myWebpage.addEventListener('mouseover', changeColor);

function addTech(element) {
  element.className = 'tech';
}

//3.
function changeText(element) {
  divUm.innerText = element.target.value;
}

//4.
function redirectToPage(element) {
  window.open("https://github.com/igordmf/");
}

//5.
function changeColor(element) {
  let randomColor = Math.floor(Math.random()*16777215).toString(16);
  let colorText = '#' + randomColor;
  element.target.style.color = colorText;
}

/*
1. Copie esse arquivo e edite apenas ele;

2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;

2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';

4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
4.1. Que tal redirecionar para seu portifólio?

5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.