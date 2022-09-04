const paineis = document.querySelectorAll('.painel');

paineis.forEach(painel => {
    painel.addEventListener('click', () => {
        removerClasseAtivo();
        painel.classList.add('ativo');
    })
})

function removerClasseAtivo() {
    paineis.forEach(painel => {
        painel.classList.remove('ativo')
    })
}