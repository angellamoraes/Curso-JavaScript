/* Atualizar Idade
Descrição: Crie uma função chamada atualizarIdade que receba um objeto usuario e um número representando a nova idade do usuário. 
A função deve atualizar o valor da propriedade idade.  */

function atualizarIdade(usuario, novaIdade) {
  usuario.idade = novaIdade;
}

const usuario = {
  nome: "Marcos",
  idade: 19,
  email: "marquinhos@hotmail.com"
};

atualizarIdade(usuario, 25);

console.log(usuario.idade);
