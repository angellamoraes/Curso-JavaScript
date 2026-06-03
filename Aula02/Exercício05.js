/*Descrição: Crie um programa em Portugol que leia os valores de pH de N substâncias. A entrada termina
 quando o usuário digitar -1. Para cada valor informado, o programa deve classificar a substância como 
 ácida, básica ou neutra, de acordo com seu pH:
Se o pH for menor que 7: Substância Ácida
Se o pH for maior que 7: Substância Básica
Se o pH for igual a 7: Substância Neutra*/

let ph = Number(prompt("Digite o valor do pH (-1 para encerrar):?"));

while (ph !== -1) {
  
  if (ph < 7) {
    alert("Substância Ácida");
  } else if (ph > 7) {
    alert("Substância Básica");
  } else {
    alert("Substância Neutra");
  }

  ph = Number(prompt("Digite o valor do pH (-1 para encerrar):?"));
}
