/*  Transformando um Array de Preços
Descrição: Crie uma função chamada converterMoeda que recebe um array de preços em dólares e retorna um novo array com os valores convertidos para reais (cotação: 1 dólar = 5 reais). 
Use map para multiplicar cada valor por 5 e retorne o novo array com os preços convertidos. */

const precosDolares = [10, 20, 30];

function converterMoeda(precos) {
  return precos.map(valor => valor* 5);
}

const precosReais = converterMoeda(precosDolares);

console.log(precosReais);
