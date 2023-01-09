const form = document.getElementById("novo-item");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem("itens")) || []; //se tem itens, consulta; se não, cria um array vazio

itens.forEach( (elemento) => {
  criaElemento(elemento);
} );

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = evento.target.elements["nome"];
  const quantidade = evento.target.elements["quantidade"];

  const itemAtual = {
    "nome": nome.value,
    "quantidade": quantidade.value
  };

  criaElemento(itemAtual);

  itens.push(itemAtual);

  localStorage.setItem("itens", JSON.stringify(itens)); //(chave, valor)

  criaElemento(
    nome.value,
    quantidade.value
  );

  nome.value = '';
  quantidade.value = '';

});

function criaElemento(item) {
  const novoItem = document.createElement("li");
  novoItem.classList.add("item");

  const numeroItem = document.createElement("strong");
  numeroItem.innerHTML = item.quantidade;

  novoItem.appendChild(numeroItem);
  novoItem.innerHTML += item.nome;

  lista.appendChild(novoItem);
}

//trying on git commands