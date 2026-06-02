/*Descrição: Crie um programa que permita verificar se várias pessoas podem tirar a Carteira Nacional de Habilitação (CNH).
Inicialmente, o programa deve perguntar quantas pessoas serão analisadas. Em seguida, para cada pessoa, solicite:
Nome
Idade
Considere que uma pessoa pode tirar CNH apenas se tiver 18 anos ou mais.
Ao final de cada análise, exiba uma mensagem informando se a pessoa pode ou não tirar a CNH.*/

let quantidade = Number(prompt("Quantas pessoas deseja analisar para retirar CNH?"));

for (let i = 1; i <= quantidade; i++) {
    let nome = prompt("Informe o nome da ${i}ª pessoa:");
    let idade = Number(prompt("Informe a idade de ${nome}:"));
    
    if (idade >= 18) {
        alert(`${nome} pode tirar CNH`);
    } else {
        alert(`${nome} não pode tirar CNH`);
    }
}
