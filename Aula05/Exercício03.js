/* Somando números
Descrição: Crie uma função chamada somarNumeros que recebe um array e retorna a soma dos números que são divisíveis por 2 e 3. 
Use for...in para percorrer o array. */

const numeros = [4, 10, -4, 6, 24, 50, 12, 0, -1];

function  somarNumeros(numeros) {

  let soma = 0;

  for (let indice in numeros) {
    
      if (numeros[indice] % 2 ===  0 && numeros[indice] %3 === 0) {
          soma += numeros[indice];
  
        }
  }

  return soma;
}

let soma = somarNumeros(numeros);

console.log(soma);
