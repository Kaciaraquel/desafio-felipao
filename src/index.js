let nomeDoHeroi = "Remador";
let qtdXp = 8500;

switch (true) {
    case (qtdXp <= 1000):
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ferro");
        break;
    case (qtdXp >= 1001 && qtdXp <= 2000):
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Bronze");
        break;
    case (qtdXp >= 2001 && qtdXp <= 5000):
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Prata");
        break;
    case (qtdXp >= 5001 && qtdXp <= 7000):
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ouro");
        break;
    case (qtdXp >= 7001 && qtdXp <= 8000):
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Platina");
        break;
    case (qtdXp >= 8001 && qtdXp <= 9000):
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Ascendente");
        break;
    case (qtdXp >= 9001 && qtdXp <= 10000):
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Imortal");
        break;
    case (qtdXp >= 10001):
        console.log("O Herói de nome " + nomeDoHeroi + " está no nível de Radiante");
        break;
}
