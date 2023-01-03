function abreJogo() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Por favor, digite os nomes dos players!');
        return;
    }
    console.log(players);
    playerAtivoSpan.textContent = players[playerAtivo].name;
    gameArea.style.display = 'block';
}

function trocaPlayer() {
    if (playerAtivo === 0) {
        playerAtivo = 1;
    } else {
        playerAtivo = 0;
    }

    playerAtivoSpan.textContent = players[playerAtivo].name;
}

function selecionaQuadrado(event) {
    const quadradoClicado = event.target;
    const colunaSelecionada = quadradoClicado.dataset.col - 1;
    const linhaSelecionada = quadradoClicado.dataset.row - 1;

    if (gameData[linhaSelecionada][colunaSelecionada] > 0) {
        alert('Por favor, selecione um quadrado vazio');
        return;
    };

    quadradoClicado.textContent = players[playerAtivo].symbol;
    quadradoClicado.classList.add('clicado');

    gameData[linhaSelecionada][colunaSelecionada] = playerAtivo + 1;
    console.log(gameData);

    trocaPlayer();
}