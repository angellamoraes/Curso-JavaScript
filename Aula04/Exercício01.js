let velocidade = Number(prompt("Informe a velocidade do motorista:"));

let resultado = calculaMulta(velocidade);

function calculaMulta(velocidade) {

  if (velocidade <= 50) {
    return  "O motorista não recebeu multa.";

  } else if ( velocidade <= 55) {
      return "O motorista deve pagar R$ 230,00 de multa, pois ultrapassou até 10% do limite permitido.";

    } else if (velocidade <= 60) {
      return "O motorista deve pagar R$ 340,00 de multa, pois ultrapassou até 20% do limite permitido.";

    } else {
      let kmExcedido = velocidade - 50;
      let multa =  kmExcedido * 19.28;
      return `O motorista deve pagar R$ ${multa.toFixed(2)} de multa, pois ultrapassou mais de 20% do limite permitido.`;
    }
}

console.log(resultado);
