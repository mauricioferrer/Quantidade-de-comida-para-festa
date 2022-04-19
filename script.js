const inputAdultos = document.getElementById("adultos");
const inputCriancas = document.getElementById("criancas");
const inputDuracao = document.getElementById("duracao");

const resultado = document.getElementById("resultado")

function salgadoPP(duracao) {
  
  if(duracao >= 4) {
    return 400;
  }else{
    return 250;
  }
}

function docePP(duracao) {
  
  if(duracao >= 4) {
    return 300;
  }else{
    return 150;
  }
}

function bebidasPP(duracao) {
  
  if(duracao >= 4) {
    return 1500;
  }else{
    return 1000;
  }
}

function calcular() {
  console.log("Calculando...");

  let adultos = inputAdultos.value;
  let criancas = inputCriancas.value;
  let duracao = inputDuracao.value;

  let qdtTotalsalgado = salgadoPP(duracao) * adultos + (salgadoPP(duracao) / 2 * criancas);
  let qdtTotaldoce = docePP(duracao) * adultos + (docePP(duracao) / 2 * criancas);
  let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

  resultado.innerHTML = `<p>${qdtTotalsalgado}g de Salgado</p>`
  resultado.innerHTML += `<p>${qdtTotaldoce}g de Doce</p>`
  resultado.innerHTML += `<p>${qdtTotalBebidas}ml de Bebida</p>`
}