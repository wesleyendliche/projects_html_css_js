const abrir = document.getElementById('abrir')
const fechar = document.getElementById('fechar')
const container = document.querySelector('.container')

abrir.addEventListener('click', () => container.classList.add('show-nav'))

fechar.addEventListener('click', () => container.classList.remove('show-nav'))