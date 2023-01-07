const botao = document.querySelector('button');
const tintas = document.querySelector('.lista');

botao.addEventListener('click', () => {
    if (tintas.style.display === "none") {
        tintas.style.display = "block";
    } else {
        tintas.style.display = "none";
    }
})