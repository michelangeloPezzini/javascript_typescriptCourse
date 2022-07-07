var idade, eleitor;
idade = 18;
eleitor = idade < 18 ? "Não pode votar" : "Pode votar";
document.getElementById("texto").innerHTML = eleitor;
