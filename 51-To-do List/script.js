const formulario = document.querySelector('.form-container')
const inputTarefas = document.querySelector('#tarefa')
const lista = document.querySelector('#lista')

formulario.addEventListener('submit', adicionar);

function adicionar(e) {
    e.preventDefault();
    
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${inputTarefas.value}`));

    lista.appendChild(li);
}