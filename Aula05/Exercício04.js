/* Maior e Menor
Descrição: Crie duas funções chamadas obterMaior e obterMenor que recebem um array de números e retornam o maior e o menor elemento, respectivamente. 
Use for...of para percorrer o array e informe o maior e o menor numero encontrado. */

const numeros = [-1, 3, 8, -2, 4, 10];

function obterMaior(numeros) {

  let maior = numeros[0];

  for(let numero of numeros) {
  
    if (numero > maior) {
      maior = numero;
    
    }

  }

  return maior;
}

function obterMenor(numeros) {

  let menor = numeros[0];

  for(let numero of numeros) {
    
    if(numero < menor) {
      menor = numero;
    }
  }

  return menor;
}

let maior = obterMaior(numeros);

let menor = obterMenor(numeros);

console.log(maior, menor);
