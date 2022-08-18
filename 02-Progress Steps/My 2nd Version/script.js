const progresso = document.getElementById('progresso');
const voltar = document.getElementById('voltar');
const proximo = document.getElementById('proximo');
const circulos = document.querySelectorAll('.circulo');

let ativoAtual = 1;

proximo.addEventListener('click', () => {
    ativoAtual++

    if(ativoAtual > circulos.length) {
        ativoAtual = circulos.length
    }

    update()
})

voltar.addEventListener('click', () => {
    ativoAtual--

    if(ativoAtual < 1) {
        ativoAtual = 1
    }

    update()
})

function update() {
    circulos.forEach((circulos, idx) => {
        if(idx < ativoAtual) {
            circulos.classList.add('ativo')
        } else {
            circulos.classList.remove('ativo')
        }
    })

    const ativos = document.querySelectorAll('.ativo');

    progresso.style.width = (ativos.length - 1) / (circulos.length - 1) * 100 + '%'

    if(ativoAtual === 1) {
        voltar.disabled = true
    } else if(ativoAtual === circulos.length) {
        proximo.disabled = true
    } else {
        voltar.disabled = false
        proximo.disabled = false
    }
}