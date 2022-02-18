const progress = document.getElementById('progress')
const voltar = document.getElementById('voltar')
const proximo = document.getElementById('proximo')
const circles = document.querySelectorAll('.circles')

let currentActive = 1 /*can update, but not redeclare*/

proximo.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update()
})

voltar.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        voltar.disabled = true
    } else if(currentActive === circles.length) {
        proximo.disabled = true
    } else {
        voltar.disabled = false
        proximo.disabled = false
    }
}