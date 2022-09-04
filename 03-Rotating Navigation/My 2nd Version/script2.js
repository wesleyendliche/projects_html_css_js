const abre = document.getElementById('abrir')
const fecha = document.getElementById('fechar')
const container = document.querySelector('.container')

abre.addEventListener('click', () => container.classList.add('show-nav'))

fecha.addEventListener('click', () => container.classList.remove('show-nav'))