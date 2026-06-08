/* Manipulando Notas de um Aluno
Descrição: Crie uma função chamada calcularMedia que recebe um array de notas de um aluno e retorna a média das três melhores notas. 
Ordene o array de forma decrescente usando sort(), pegue as três primeiras notas usando slice(), calcule e retorne a média dessas notas.
*/

const notas = [5, 8, 9, 3, 10, 7];

function calcularMedia(notas) {

notas.sort((a, b) => b - a);

const melhores = notas.slice(0, 3);

let soma = 0;

for (let nota of melhores) {
  soma += nota;
}

return soma / melhores.length;

}

let mediaTresMelhores = calcularMedia(notas);

console.log(mediaTresMelhores);
