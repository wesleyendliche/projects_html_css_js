function abrirConfigPlayer(event) {
    playerEditado = +event.target.dataset.idplayer; //+ para converter em número
    overlay.style.display = 'block';
    elementoSombra.style.display = 'block';
}

function fechaConfiguracao() {
    overlay.style.display = 'none';
    elementoSombra.style.display = 'none';
    formulario.firstElementChild.classList.remove('erro');
    outputErro.textContent = '';
    formulario.firstElementChild.lastElementChild.value = ''; //limpa o input de nomes
}

function savePlayerConfig(event) { 
    event.preventDefault(); /*previne o browser de mandar o request do formulario e atualizar automaticamente*/
    const dadosFormulario = new FormData(event.target); /*instantiation*/
    const nomeDoPlayer = dadosFormulario.get('nome-player').trim();
    
    if(!nomeDoPlayer) { //nomeDoPlayer === ''
        event.target.firstElementChild.classList.add('erro');
        outputErro.textContent = 'Por favor, digite um nome válido!';
        return;
    }

    const playerInserido = document.getElementById('player-' + playerEditado + '-data');
    playerInserido.children[1].textContent = nomeDoPlayer; //h3 do article

    players[playerEditado - 1].name = playerInserido; //-1 p/ acessar o index correto do array

    fechaConfiguracao();
}