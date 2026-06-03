/*Descrição: Crie um programa que solicite ao usuário o seu peso (em kg) e sua altura (em metros). 
Em seguida, o programa deve calcular o IMC do usuário utilizando a fórmula:
IMC = peso / (altura * altura)*/

  let peso = Number(prompt("Insira seu peso:"));
  let altura = Number(prompt("Insira sua altura:"));

  let imc = peso / (altura * altura)

  if (imc < 18.5) {
    alert(`Seu IMC é: ${imc.toFixed(2)}
        Você está abaixo do peso`);
  } else if (imc >= 18.5 && imc <= 24.9) {
    alert(`Seu IMC é: ${imc.toFixed(2)} 
        Você tem peso normal.`);
  } else if (imc >= 25 && imc <= 29.9) {
    alert(`Seu IMC é: ${imc.toFixed(2)}
        Você tem sobrepeso.`);
  } else if (imc >=30 && imc <= 34.9) {
    alert(`Seu IMC é: ${imc.toFixed(2)}
        Você tem obesidade grau 1.`);
  } else if (imc >= 35 && imc <= 39.9) {
    alert(`Seu IMC é: ${imc.toFixed(2)}
        Você tem obesidade grau 2`);
  } else {
    alert(`Seu IMC é: ${imc.toFixed(2)}
        Você tem obesidade grau 3.`);
  }
