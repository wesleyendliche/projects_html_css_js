const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let playerEditado = 0;
let playerAtivo = 0;
let rodadaAtual = 1;

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    },
];

const overlay = document.getElementById('config-overlay');
const elementoSombra = document.getElementById('sombra');
const formulario = document.querySelector('form');
const outputErro = document.getElementById('msg-de-erro');
const gameArea = document.getElementById('game-ativo');
const quadradosDoJogo = document.querySelectorAll('#game-board li');
const playerAtivoSpan = document.querySelector('#player-ativo');
const playerOneName = document.getElementById('player-one-name');
const playerTwoName = document.getElementById('player-two-name');

/*Botões*/
const editarPlayer1 = document.getElementById('btn-editar-player1');
const editarPlayer2 = document.getElementById('btn-editar-player2');
const cancelarConfig = document.getElementById('cancelar-config');
const startBtn = document.getElementById('start-btn');

editarPlayer1.addEventListener('click', abrirConfigPlayer);
editarPlayer2.addEventListener('click', abrirConfigPlayer);

cancelarConfig.addEventListener('click', fechaConfiguracao);
elementoSombra.addEventListener('click', fechaConfiguracao);

formulario.addEventListener('submit', savePlayerConfig);

startBtn.addEventListener('click', abreJogo);

for (const quadrado of quadradosDoJogo) {
    quadrado.addEventListener('click', selecionaQuadrado);
}