/* Exibindo Nomes Formatados
Descrição: Crie uma função chamada exibirNomes que receba um array com nomes e use forEach para exibir no console cada nome com a frase: 
"Bem-vindo, [nome]!" */

const nomes = ['Lucas', 'Marina', 'João'];

function exibirNomes(nomes) {
  nomes.forEach((nome) => {
    console.log(`Bem-vindo, ${nome}!`);
  });
}

exibirNomes(nomes);
