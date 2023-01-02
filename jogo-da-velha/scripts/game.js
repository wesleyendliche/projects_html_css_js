function abreJogo() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Por favor, digite os nomes dos players!');
        return;
    }

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
    event.target.textContent = players[playerAtivo].symbol;
    event.target.classList.add('clicado');
    trocaPlayer();
}