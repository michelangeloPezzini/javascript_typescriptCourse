function nomecompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}

var nome = prompt("Digite seu nome? ");
var sobrenome = prompt("Digite seu sobrenome? ");

document.getElementById("nomeCompleto").innerHTML = nomecompleto(
  nome,
  sobrenome
);
