function abrirConfigPlayer() {
    overlay.style.display = 'block';
    elementoSombra.style.display = 'block';
}

function fechaConfiguracao() {
    overlay.style.display = 'none';
    elementoSombra.style.display = 'none';
}

function savePlayerConfig(event) { 
    event.preventDefault(); /*previne o browser de mandar o request do formulario e atualizar automaticamente*/
    const dadosFormulario = new FormData(event.target); /*instantiation*/
    const nomeDoPlayer = dadosFormulario.get('nome-player');
    console.log(nomeDoPlayer)
}