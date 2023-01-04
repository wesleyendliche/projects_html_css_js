function abreJogo() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Por favor, digite os nomes dos players!');
        return;
    }
    console.log(players);
    playerAtivoSpan.textContent = playerOneName.innerHTML;
    gameArea.style.display = 'block';
}

function trocaPlayer() {
  if (playerAtivo === 0) {
      playerAtivo = 1;
  } else {
      playerAtivo = 0;
  }

  if(playerAtivo === 1) {
    playerAtivoSpan.textContent = playerTwoName.innerHTML
  } else {
    playerAtivoSpan.textContent = playerOneName.innerHTML
  }

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
    
    const idVencedor = checaGameOver();
    console.log(idVencedor);

    rodadaAtual++; //muda a rodada
    trocaPlayer();
}

function checaGameOver() {
     // Checando as linhas
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  // Checando as colunas
  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[0][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  // Diagonal: esquerda p/ direita
  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }

  // Diagonal: direita p/ esquerda
  if (
    gameData[2][0] > 0 &&
    gameData[2][0] === gameData[1][1] &&
    gameData[1][1] === gameData[0][2]
  ) {
    return gameData[2][0];
  }

  if (rodadaAtual === 9) {
    return -1; //empate
  }

  return 0; //sinalizar que não tem vencedor ainda
}