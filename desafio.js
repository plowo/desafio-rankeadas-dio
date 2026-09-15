// Calculadora de partidas Rankeadas
function calcularPartidasRankeadas(vitorias, derrotas) {
  if (vitorias < 0 || derrotas < 0) {
    console.log(
      "Erro: O número de vitórias e derrotas não pode ser menor que zero!",
    );
    return;
  }

  let result = vitorias - derrotas;

  if (result < 0) {
    console.log("Saldo negativo! Você tem mais derrotas do que vitórias.");
    return;
  }

  return result;
}

function determinarNivel(saldoVitorias) {
  let nivel;
  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias > 50 && saldoVitorias <= 70) {
    nivel = "Ouro";
  } else if (saldoVitorias > 70 && saldoVitorias <= 100) {
    nivel = "Diamante";
  } else {
    nivel = "Lendário";
  }
  return nivel;
}

let vitorias = -1;
let derrotas = 555;

let saldoVitorias = calcularPartidasRankeadas(vitorias, derrotas);

if (saldoVitorias !== undefined) {
  let nivel = determinarNivel(saldoVitorias);
  console.log(
    `O herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`,
  );
}
