const search = document.querySelector('.search')
const botao = document.querySelector('.btn')
const input = document.querySelector('#pesquisar')

botao.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})