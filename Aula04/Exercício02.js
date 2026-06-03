let raio1 = Number(prompt("Informe o raio da 1° esfera:"));
let raio2 = Number(prompt("Informe o raio da 2° esfera:"));
let raio3 = Number(prompt("Informe o raio da 3° esfera:"));

function volumeEsfera(raio) {

  let pi = 3.1416;
  let volume = (4 * pi * (raio ** 3)) / 3;

  return volume;
}

let volume1 = volumeEsfera(raio1);
let volume2 = volumeEsfera(raio2);
let volume3 = volumeEsfera(raio3);

console.log(`Volume da 1ª esfera: ${volume1.toFixed(4)}`);
console.log(`Volume da 2ª esfera: ${volume2.toFixed(4)}`);
console.log(`Volume da 3ª esfera: ${volume3.toFixed(4)}`);

/*Calculando o Volume de Esferas
Descrição: Escreva um programa que receba o raio de três esferas e exiba o volume de cada uma delas.

Para resolver o problema, crie obrigatoriamente uma função chamada volumeEsfera que:

receba o raio da esfera como parâmetro;
calcule o volume;
retorne o valor calculado.
A função não deve imprimir o resultado na tela. O programa principal será responsável por chamar a função e exibir os volumes retornados.

Fórmula do Volume da Esfera

O volume de uma esfera é calculado pela fórmula:

[ V = \frac{4 \pi R^3}{3} ]

Considere: π=3.1416   */
