/*Descrição: Faça um programa que pergunte quantos números serão digitados. Em seguida, leia todos 
os números informados pelo usuário e determine:
O maior número digitado.
O menor número digitado.
⚠️ Atenção: a sua solução deve funcionar corretamente para números positivos, negativos e zero.
Ao final, exiba o maior e o menor valor encontrados..*/

let numeros = Number(prompt("Quantos números serão digitados?"));

let maiorNumero;
let menorNumero;

for (let i = 1; i <= numeros; i++) {
    let valorNumero = Number(prompt(`Digite o ${i}° número:`));
   if (i == 1) {
    maiorNumero = valorNumero;
    menorNumero = valorNumero;
   }
   if (valorNumero > maiorNumero) {
    maiorNumero = valorNumero;
   }
   if (valorNumero < menorNumero) {
    menorNumero = valorNumero
   }
}

alert(`O maior número digitado foi: ${maiorNumero}`);
alert(`O menor número digitado foi: ${menorNumero}`);
