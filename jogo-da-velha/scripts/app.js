let playerEditado = 0;

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

/*Botões*/
const editarPlayer1 = document.getElementById('btn-editar-player1');
const editarPlayer2 = document.getElementById('btn-editar-player2');
const cancelarConfig = document.getElementById('cancelar-config');

editarPlayer1.addEventListener('click', abrirConfigPlayer);
editarPlayer2.addEventListener('click', abrirConfigPlayer);

cancelarConfig.addEventListener('click', fechaConfiguracao);
elementoSombra.addEventListener('click', fechaConfiguracao);

formulario.addEventListener('submit', savePlayerConfig);