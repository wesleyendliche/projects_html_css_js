const subtrair = document.querySelector('#subtrair');
const adicionar = document.querySelector('#adicionar');
const braco =  document.querySelector('#braco');

const controle = document.querySelectorAll('.controle-ajuste');

controle.forEach( (elemento) => {
  elemento.addEventListener('click', () => {
    manipulaDados(event.target.textContent);
  })
})

function manipulaDados(operacao) {
  if (operacao === "-") {
    braco.value = parseInt(braco.value) - 1;
  } else {
    braco.value = parseInt(braco.value) + 1;
  }
}