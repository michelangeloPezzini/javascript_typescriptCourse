const frutas = ["Abacaxi", "Tomate", "Morango", "Melancia"];

frutas.pop(); // remove o ultimo item da lista
frutas.push("Banana"); //Adiciona um item ao array
// .join é usado para separar itens dentro de um array
//.shift() remove o primeiro item da lista
document.getElementById("listaFrutas").innerHTML = frutas;
