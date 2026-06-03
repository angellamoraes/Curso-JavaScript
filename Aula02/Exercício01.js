/*Descrição: Crie um programa que leia o ano de nascimento do usuário e o ano atual. C
om base nesses dados, calcule a idade e exiba uma mensagem informando:
Quantos anos o usuário completa no ano atual. Se ele pode ou não tirar a habilitação, 
considerando que a idade mínima é 18 anos.*/

let anoNascimento = Number(prompt("Digite o ano de nascimento:"));
let anoAtual = Number(prompt("Digite o ano atual:"));

let maiorIdade = anoAtual - anoNascimento

if (maiorIdade >= 18) {
    alert(`Você completa ${maiorIdade} anos em ${anoAtual} e poderá tirar a habilitação.`);
} else {
    alert(`Você completa ${maiorIdade} anos em ${anoAtual} e ainda não poderá tirar a habilitação.`);
}
